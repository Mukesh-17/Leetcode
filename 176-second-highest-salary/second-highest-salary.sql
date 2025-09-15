/* Write your PL/SQL query statement below */
Select Max(salary) as  SecondHighestSalary from
(Select salary,dense_rank() over(order by salary desc) as rnk from employee )
where rnk=2;