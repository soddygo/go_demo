package com.tansun.gojs.dao.impl;


import com.tansun.gojs.dao.BaseDao;
import org.apache.commons.lang3.StringUtils;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projections;
import org.hibernate.transform.Transformers;
import org.hibernate.type.Type;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.hibernate4.HibernateCallback;
import org.springframework.orm.hibernate4.HibernateTemplate;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.io.Serializable;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Repository("baseDao")
public class BaseDaoImpl implements BaseDao {

	protected static final Logger LOGGER = LoggerFactory.getLogger(BaseDaoImpl.class);

	@Resource(name = "hibernateTemplate")
	protected HibernateTemplate hibernateTemplate;

	@Resource(name = "jdbcTemplate")
	protected JdbcTemplate jdbcTemplate;

	public Session getCurrentSession() {
		return this.hibernateTemplate.getSessionFactory().getCurrentSession();
	}

	@Override
	public void save(Object obj) throws DataAccessException {

		this.hibernateTemplate.save(obj);
	}

	@Override
	public void update(Object obj) throws DataAccessException {

		this.hibernateTemplate.update(obj);
	}

	@Override
	public void saveOrUpdate(Object obj) throws DataAccessException {

		this.hibernateTemplate.saveOrUpdate(obj);
	}

	@Override
	public <T> void merge(T obj) throws DataAccessException {

		this.hibernateTemplate.merge(obj);

	}

	@Override
	public void delete(Object obj) throws DataAccessException {

		this.hibernateTemplate.delete(obj);
	}

	@Override
	public <E> void deleteById(Class<E> clazz, Serializable id) throws DataAccessException {

		this.hibernateTemplate.delete(this.get(clazz, id));
	}

	@Override
	public void deleteAll(List<?> list) throws DataAccessException {

		this.hibernateTemplate.deleteAll(list);

	}

	@Override
	public void saveAll(List<?> list) throws DataAccessException {

		if (list == null || list.size() == 0) {
			return;
		}
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i) == null) {
				continue;
			}
			this.save(list.get(i));
		}
	}

	@Override
	public void updateAll(List<?> list) throws DataAccessException {

		if (list == null || list.size() == 0) {
			return;
		}
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i) == null) {
				continue;
			}
			this.update(list.get(i));
		}
	}

	@Override
	public void saveOrUpdateAll(List<?> list) throws DataAccessException {

		if (list == null || list.size() == 0) {
			return;
		}
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i) == null) {
				continue;
			}
			this.saveOrUpdate(list.get(i));
		}
	}

	@Override
	public void mergeAll(List<?> list) throws DataAccessException {

		if (list == null || list.size() == 0) {
			return;
		}
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i) == null) {
				continue;
			}
			this.merge(list.get(i));
		}
	}

	@Override
	public void updateBySql(String sql, Object... args) throws DataAccessException {

		Session currentSession = getCurrentSession();
		SQLQuery sqlQuery = currentSession.createSQLQuery(sql);
		if (args != null) {
			for (int i = 0; i < args.length; i++) {
				sqlQuery.setParameter(i, args[i]);
			}
		}
		sqlQuery.executeUpdate();

	}

	@Override
	public void batchUpdateSql(String... sqls) throws DataAccessException {

		if (sqls != null) {
			for (int i = 0; i < sqls.length; i++) {
				updateBySql(sqls[i]);
			}
		}

		// this.jdbcTemplate.batchUpdate(sqls);
	}

	@Override
	public <T> T get(Class<T> clazz, Serializable id) {

		return this.hibernateTemplate.get(clazz, id);
	}

	@Override
	public <T> T get(Class<T> clazz, Serializable id, boolean evict) {
		if (id == null) {
			return null;
		}
		T e = this.get(clazz, id);
		if (evict) {
			this.hibernateTemplate.evict(e);
		}
		return e;
	}

	@Override
	public <T> T load(Class<T> clazz, Serializable id) {

		return this.hibernateTemplate.load(clazz, id);
	}

	/*
	 * @Override public void evict(Object obj) {
	 * this.getCurrentSession().evict(obj); }
	 * 
	 * 
	 * @Override public void evictAll(List<?> list) {
	 * 
	 * if(list == null || list.size() == 0) return; for(int i = 0; i <
	 * list.size(); i++){ if(list.get(i) == null) continue;
	 * this.evict(list.get(i)); } }
	 */

	@SuppressWarnings("unchecked")
	@Override
	public <T> List<T> findAll(Class<T> clazz) {

		return (List<T>) this.hibernateTemplate.find("from " + clazz.getSimpleName());

	}

	@Override
	public int findTotalByCriteria(DetachedCriteria criteria) {

		criteria.setProjection(Projections.rowCount());
		List<Long> list = findByCriteria(criteria);
		criteria.setProjection(null);

		return list.get(0).intValue();
	}

	@SuppressWarnings("unchecked")
	@Override
	public <T> List<T> findByCriteria(DetachedCriteria criteria) {

		return (List<T>) this.hibernateTemplate.findByCriteria(criteria);

	}

	@SuppressWarnings("unchecked")
	@Override
	public <T> List<T> findByCriteria(DetachedCriteria criteria, int firstResult, int maxResults) {

		return (List<T>) this.hibernateTemplate.findByCriteria(criteria, firstResult, maxResults);

	}

	@Override
	public <T> T findOneByCriteria(DetachedCriteria criteria) {

		List<T> list = this.findByCriteria(criteria);
		if (null != list && list.size() > 0) {
			return list.get(0);
		}
		return null;
	}

	@Override
	public <T> List<T> findAllBySql(Class<T> clazz, String sql, Object... args) {

		return findAllBySql(clazz, true, sql, args);
	}

	@Override
	public <T> List<T> findAllBySql(Class<T> clazz, boolean evict, String sql, Object... args) {

		if (StringUtils.isBlank(sql))
			return null;
		Session session = getCurrentSession();
		SQLQuery sqlQuery = session.createSQLQuery(sql);
		sqlQuery.addEntity(clazz);
		if (args != null) {
			for (int i = 0; i < args.length; i++) {
				sqlQuery.setParameter(i, args[i]);
			}
		}
		try {
			@SuppressWarnings("unchecked")
			List<T> list = sqlQuery.list();
			if (evict && list != null && list.size() > 0) {
				for (T e : list) {
					session.evict(e);
				}
			}
			return list;
		} catch (HibernateException e) {
			LOGGER.error("SQL : " + sql, e);
			e.printStackTrace();
		}
		return Collections.emptyList();

	}

	@Override
	public <T> List<T> queryForList(String sql, Class<T> clazz, Object... paras) {
		return jdbcTemplate.query(sql, new BeanPropertyRowMapper<T>(clazz), paras);
	}

	@Override
	public List<Map<String, Object>> queryForList(String sql, Object... paras) {

		return this.jdbcTemplate.queryForList(sql, paras);

	}

	@Override
	public Map<String, Object> queryOneEntity(String sql, Object... paras) {

		List<Map<String, Object>> list = queryForList(sql, paras);
		if (null != list && list.size() > 0) {
			return list.get(0);
		}
		return null;
	}

	@Override
	public <T> T queryOneEntity(String sql, Class<T> clazz, Object... paras) {

		List<T> list = queryForList(sql, clazz, paras);
		if (null != list && list.size() > 0) {
			return list.get(0);
		}
		return null;
	}

	@Override
	public <T> T queryForObject(String sql, Class<T> clazz, Object... paras) {

		try {
			return this.jdbcTemplate.queryForObject(sql, clazz, paras);
		} catch (Exception e) {
			return null;
		}

	}


	@Override
	public void evict(Object obj) {
		this.hibernateTemplate.evict(obj);
	}

	@Override
	public void evictAll(List<?> list) {
		if (list != null && list.size() > 0) {
			for (int i = 0; i < list.size(); i++) {
				this.evict(list.get(i));
			}
		}
	}

	@Override
	public <T> List<T> queryBeanBySql(final String sql, final Class<T> clazz, final Map<String, Type> aliasMap,
			final int firstResult, final int maxResults, final Object... params) {

		return this.hibernateTemplate.execute(new HibernateCallback<List<T>>() {

			@SuppressWarnings("unchecked")
			@Override
			public List<T> doInHibernate(Session session) throws HibernateException {
				SQLQuery query = session.createSQLQuery(sql);

				if (params != null && params.length > 0) {
					for (int i = 0; i < params.length; i++) {
						query.setParameter(i, params[i]);
					}
				}

				query.setFirstResult(firstResult);
				query.setMaxResults(maxResults);

				for (String key : aliasMap.keySet()) {
					query.addScalar(key, aliasMap.get(key));
				}

				query.setResultTransformer(Transformers.aliasToBean(clazz));

				return query.list();
			}
		});
	}

	@Override
	public <T> List<T> queryBeanByCriteria(final DetachedCriteria criteria, final Class<T> clazz,
			final Map<String, Type> aliasMap, final int firstResult, final int maxResults) {

		return this.hibernateTemplate.execute(new HibernateCallback<List<T>>() {

			@SuppressWarnings("unchecked")
			@Override
			public List<T> doInHibernate(Session session) throws HibernateException {

				Criteria cri = criteria.getExecutableCriteria(session);

				cri.setFirstResult(firstResult);
				cri.setMaxResults(maxResults);

//				for (String key : aliasMap.keySet()) {
//					// cri.addScalar(key, aliasMap.get(key));
//				}

				// query.setResultTransformer(Transformers.aliasToBean(clazz));
				cri.setResultTransformer(Transformers.aliasToBean(clazz));

				return cri.list();
			}
		});
	}

}
