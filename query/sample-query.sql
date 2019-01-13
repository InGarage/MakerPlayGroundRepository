------------- Table Creation ---------------

-- CREATE TABLE mp_version
-- (
--     build_name VARCHAR(50) NOT NULL,
--     version VARCHAR(50) NOT NULL,
--     download_url VARCHAR(50) NOT NULL,
--     release_date DATETIME,
-- );

-- SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'


------------- INSERT DATA ---------------
INSERT INTO mp_version (build_name, version, download_url, release_date)
VALUES ('Maker Playground v0.3.1', '0.3.1', 'http://makerplayground.io', '2018-12-17 00:00:00');

------------- Select Data ---------------
-- SELECT * FROM mp_version;

------------- Select current Data --------------
-- SELECT TOP 1 * from mp_version ORDER BY release_date DESC;

------------- Delete Data ----------------
DELETE FROM mp_version WHERE version='0.3';