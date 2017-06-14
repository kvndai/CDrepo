-- 1. 
-- select countries.name, languages.language, languages.percentage
-- from countries
-- join languages on countries.id = languages.country_id
-- where languages.language like '%slovene%'
-- order by languages.percentage desc;

-- 2.
-- select countries.name, count(cities.name)
-- from countries
-- join cities on countries.id = cities.country_id
-- group by countries.id
-- order by count(cities.name) desc;

-- 3.
-- select countries.name, cities.name, cities.population
-- from countries
-- join cities on countries.code = cities.country_code
-- where countries.name like '%mexico%' and cities.population > 500000
-- order by cities.population desc;

-- 4.
-- select countries.name, languages.language, languages.percentage
-- from countries
-- join languages on countries.id = languages.country_id
-- where languages.percentage > 89
-- order by languages.percentage desc;

-- 5.
--  select name, surface_area, population
--  from countries
--  where countries.surface_area < 501 and countries.population > 100000;

-- 6
-- select name, government_form, capital, life_expectancy
-- from countries
-- where government_form like 'Constitutional Monarchy%' and capital > 200 and life_expectancy > 75;

-- 7.
--  select countries.name, cities.name, cities.district, cities.population
--  from countries
--  join cities on countries.code = cities.country_code
--  where countries.name like '%argentina%' and cities.district like '%buenos aires%' and cities.population > 100000;

-- 8.
 select count(name), region
 from countries
group by region;
