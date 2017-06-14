USE lead_gen_business;

-- 1.
SELECT MONTHNAME(billing.charged_datetime), SUM(billing.amount)
FROM billing
WHERE MONTH(billing.charged_datetime) = 3 AND YEAR(billing.charged_datetime) = 2012;

-- 2.
SELECT clients.first_name, clients.last_name, SUM(billing.amount)
FROM billing
JOIN clients ON billing.client_id = clients.client_id
WHERE clients.client_id = 2;

-- 3.
SELECT clients.client_id, sites.domain_name
FROM clients
JOIN sites ON clients.client_id = sites.client_id
WHERE clients.client_id = 10;

-- 4. 
SELECT clients.client_id, COUNT(sites.client_id), MONTHNAME(sites.created_datetime), YEAR(sites.created_datetime)
FROM sites
JOIN clients ON sites.client_id = clients.client_id
WHERE clients.client_id = 20
group by MONTHNAME(sites.created_datetime), YEAR(sites.created_datetime);

-- 5. 
SELECT sites.domain_name, COUNT(leads.site_id), DATE(leads.registered_datetime)
FROM leads
JOIN sites ON leads.site_id = sites.site_id
WHERE leads.registered_datetime BETWEEN '2011-01-01' AND '2011-02-15'
GROUP BY sites.domain_name;

-- 6.
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, COUNT(leads.leads_id) AS leads_generated
FROM leads
JOIN sites ON leads.site_id = sites.site_id
JOIN clients ON sites.client_id = clients.client_id
WHERE leads.registered_datetime BETWEEN '2011-01-01' AND '2011-12-31'
GROUP BY clients.client_id;

-- 7.
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, COUNT(leads.leads_id) AS leads_generated, MONTHNAME(leads.registered_datetime)
FROM leads
JOIN sites ON leads.site_id = sites.site_id
JOIN clients ON sites.client_id = clients.client_id
WHERE leads.registered_datetime BETWEEN '2011-01-01' AND '2011-06-31'
GROUP BY MONTH(leads.registered_datetime), clients.client_id; 

-- 8.
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, COUNT(leads.leads_id) AS leads_generated, sites.domain_name
FROM leads
JOIN sites ON leads.site_id = sites.site_id
JOIN clients ON sites.client_id = clients.client_id
WHERE leads.registered_datetime BETWEEN '2011-01-01' AND '2011-12-31'
GROUP BY sites.domain_name;

SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, COUNT(leads.leads_id) AS leads_generated, sites.domain_name
FROM leads
JOIN sites ON leads.site_id = sites.site_id
JOIN clients ON sites.client_id = clients.client_id
-- WHERE leads.registered_datetime BETWEEN '2011-01-01' AND '2011-12-31'
GROUP BY sites.domain_name;

-- 9.
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, SUM(billing.amount), MONTHNAME(billing.charged_datetime), YEAR(billing.charged_datetime)
FROM billing
JOIN clients ON billing.client_id = clients.client_id
GROUP BY clients.client_id, MONTH(billing.charged_datetime), YEAR(billing.charged_datetime);

-- 10.
SELECT CONCAT(clients.first_name, ' ', clients.last_name) AS client_name, GROUP_CONCAT(sites.domain_name) AS 'sites'
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
GROUP BY clients.client_id;
