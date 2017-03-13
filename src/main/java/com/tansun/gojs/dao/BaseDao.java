package com.tansun.gojs.dao;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.type.Type;
import org.springframework.dao.DataAccessException;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public interface BaseDao {

	/**
	 * hibernate保存实体对象
	 * 
	 * @param obj
	 */
	public void save(Object obj) throws DataAccessException;

	/**
	 * hibernate更新实体对象
	 * 
	 * @param obj
	 */
	public void update(Object obj) throws DataAccessException;

	/**
	 * hibernate保存或更新实体对象
	 * 
	 * @param obj
	 */
	public void saveOrUpdate(Object obj) throws DataAccessException;

	/**
	 * hibernate保存或更新对象, 与saveOrUpdate不同是是对象未加入一级缓存
	 * 
	 * @param e
	 * @throws Exception
	 */
	public <T> void merge(T obj) throws DataAccessException;

	/**
	 * hibernate删除实体对象
	 * 
	 * @param obj
	 */
	public void delete(Object obj) throws DataAccessException;

	/**
	 * hibernate根据ID删除实体对象
	 * 
	 * @param clazz
	 * @param id
	 */
	public <T> void deleteById(Class<T> clazz, Serializable id) throws DataAccessException;

	/**
	 * hibernate删除对象集合
	 * 
	 * @param list
	 */
	public void deleteAll(List<?> list) throws DataAccessException;

	/**
	 * hibernate保存对象集合
	 * 
	 * @param list
	 */
	public void saveAll(List<?> list) throws DataAccessException;

	/**
	 * hibernate更新对象集合
	 * 
	 * @param list
	 */
	public void updateAll(List<?> list) throws DataAccessException;

	/**
	 * hibernate保存或更新对象集合
	 * 
	 * @param list
	 */
	public void saveOrUpdateAll(List<?> list) throws DataAccessException;

	/**
	 * hibernate保存或更新对象集合 (对象未加入一级缓存)
	 * 
	 * @param list
	 */
	public void mergeAll(List<?> list) throws DataAccessException;

	/**
	 * 执行sql语句
	 * 
	 * @param sql
	 */
	public void updateBySql(String sql, Object... args) throws DataAccessException;

	/**
	 * 批量执行sql语句
	 * 
	 * @param sqls
	 */
	public void batchUpdateSql(String... sqls) throws DataAccessException;

	/**
	 * hibernate根据ID查询对象, 如果没有返回null
	 * 
	 * @param clazz
	 * @param id
	 * @return
	 */
	public <T> T get(Class<T> clazz, Serializable id);

	/**
	 * hibernate根据ID查询对象,如果没有返回null
	 * 
	 * @param clazz
	 * @param id
	 * @param evict
	 *            是否清除一级缓存
	 * @return
	 */
	public <T> T get(Class<T> clazz, Serializable id, boolean evict);

	/**
	 * hibernate根据ID查询对象, 如果没有结果会抛异常
	 * 
	 * @param clazz
	 * @param id
	 * @return
	 */
	public <T> T load(Class<T> clazz, Serializable id);

	/**
	 * 清除一级缓存中的指定对象
	 * 
	 * @param obj
	 */
	public void evict(Object obj);

	/**
	 * 清除一级缓存
	 * 
	 * @param list
	 */
	public void evictAll(List<?> list);

	/**
	 * hibernate查询所有对象
	 * 
	 * @param clazz
	 * @return
	 */
	public <T> List<T> findAll(Class<T> clazz);

	/**
	 * hibernate查询集合
	 * 
	 * @param criteria
	 * @return
	 */
	public <T> List<T> findByCriteria(DetachedCriteria criteria);

	/**
	 * hibernate查询总数
	 * 
	 * @param criteria
	 * @return
	 */
	public int findTotalByCriteria(DetachedCriteria criteria);

	/**
	 * hibernate分页查询
	 * 
	 * @param criteria
	 * @param firstResult
	 * @param maxResults
	 * @return
	 */
	public <T> List<T> findByCriteria(DetachedCriteria criteria, int firstResult, int maxResults);

	/**
	 * hibernate查询单个对象
	 * 
	 * @param criteria
	 * @return
	 */
	public <T> T findOneByCriteria(DetachedCriteria criteria);

	/**
	 * hibernate 根据sql查询所有对象
	 * 
	 * @param clazz
	 * @param sql
	 * @param args
	 * @return
	 */
	public <T> List<T> findAllBySql(Class<T> clazz, String sql, Object... args);

	/**
	 * hibernate 根据sql查询所有对象
	 * 
	 * @param clazz
	 * @param evict
	 * @param sql
	 * @param args
	 * @return
	 */
	public <T> List<T> findAllBySql(Class<T> clazz, boolean evict, String sql, Object... args);

	/**
	 * jdbcTemplate 查询对象集合, 返回Map键值对的集合
	 * 
	 * @param sql
	 * @param paras
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> queryForList(String sql, Object... paras);

	/**
	 * jdbcTemplate 查询包装类型对象集合 (String, Integer, Long, ......)
	 * 
	 * @param sql
	 * @param paras
	 * @return List<T>
	 */
	public <T> List<T> queryForList(String sql, Class<T> clazz, Object... paras);

	/**
	 * jdbcTemplate 查询单个对象
	 * 
	 * @param sql
	 * @param paras
	 * @return Map<String, Object>
	 */
	public Map<String, Object> queryOneEntity(String sql, Object... paras);

	/**
	 * jdbcTemplate 查询单个指定对象
	 * 
	 * @param sql
	 * @param clazz
	 * @param paras
	 * @return
	 */
	public <T> T queryOneEntity(String sql, Class<T> clazz, Object... paras);

	/**
	 * jdbcTemplate 查询指定对象 (可为包装类型)
	 * 
	 * @param sql
	 * @param clazz
	 * @param paras
	 * @return
	 */
	public <T> T queryForObject(String sql, Class<T> clazz, Object... paras);


	/**
	 * 根据 sql 查询 并将结果转换成指定的 bean
	 * 
	 * @param sql
	 *            sql语句
	 * @param clazz
	 *            待转换的bean 类型
	 * @param aliasMap
	 *            别名类型
	 * @param firstResult
	 * @param maxResults
	 * @param params
	 * @return
	 */
	public <T> List<T> queryBeanBySql(String sql, Class<T> clazz, Map<String, Type> aliasMap, int firstResult,
                                      int maxResults, Object... params);
	
	/**
	 * 根据criteria 查找对象，并根据别名将结果装换为指定的bean
	 * @param criteria	条件
	 * @param clazz	需要转换成的 bean
	 * @param aliasMap	别名
	 * @param firstResult	
	 * @param maxResults
	 * @return
	 */
	
	public <T> List<T> queryBeanByCriteria(DetachedCriteria criteria, Class<T> clazz, Map<String, Type> aliasMap, int firstResult,
                                           int maxResults);

	
}
