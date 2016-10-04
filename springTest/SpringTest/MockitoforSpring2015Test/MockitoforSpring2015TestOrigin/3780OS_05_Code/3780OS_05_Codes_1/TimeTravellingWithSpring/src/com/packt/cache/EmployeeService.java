package com.packt.cache;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.annotation.PostConstruct;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    private final Map<String, Employee> employees = new ConcurrentHashMap<String, Employee>();

    @PostConstruct
    public void init() {
        saveEmployee(new Employee("101", "John", "Doe"));
        saveEmployee(new Employee("102", "Jack", "Russel"));
    }

    /**
     * @return {@link Employee} that will be cached because of {@link Cacheable} under a name of <b>employee</b>
     */
    @Cacheable("employee")
    public Employee getEmployee(final String employeeId) {
        System.out.println(String.format("Loading a employee with id of : %s", employeeId));
        return employees.get(employeeId);
    }

    /**
     * By usage of {@link CacheEvict} framework is being told to cache this input parameter in
     * a cache called <b>employee</b>. Also the key for the cache is determined by an SpEl like:
     * <b>#emp.empId</b>
     */
    @CacheEvict(value = "employee", key = "#emp.empId")
    public void saveEmployee(final Employee emp) {
    	System.out.println(String.format("Saving a emp with id of : %s", emp.getEmpId()));
        employees.put(emp.getEmpId(), emp);
    }
} 
