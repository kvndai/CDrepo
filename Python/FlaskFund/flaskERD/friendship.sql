INSERT INTO users (first_name, last_name, created_at, updated_at)
values ('Jessica', 'Davidson', now(), now());

use friendships;

SELECT *
FROM users
LEFT JOIN friendships ON users.id = friendships.friend_id
LEFT JOIN users as users2 ON users2.id = friendships.friend_id