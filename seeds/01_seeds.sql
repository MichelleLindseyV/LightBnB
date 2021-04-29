INSERT INTO users (name, email, password)
VALUES ('Melissa Robin', 'melly@example.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Jordan Williams', 'jdubbs@example.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Medgan Carnahan', 'westcoast@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, title, description, tumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code)
VALUES (1, 'Sandy Shores', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 250, 2, 2, 3, 'Canada', 'Fern Lane', 'Victoria', 'BC', 'W3R 6H3'),
(2, 'Sunset Bay', 'description', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg', 300, 1, 1, 2, 'Canada', 'Oak Street', 'Vaughn', 'ON', 'T9Q 9O3'),
(3, 'Rustic Paradise', 'description', 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg', 175, 1, 1, 1, 'Canada', 'Red Sand Drive', 'Souris', 'PEI', 'R8U 0E4');

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES ('2020-02-14', '2020-02-16', 3, 1),
('2021-01-02', '2021-01-07', 1, 2),
('2019-04-18', '2019-04-20', 2, 3);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (1, 3, 1, 5, 'message'),
(2, 1, 2, 4, 'message'),
(3, 2, 3, 5, 'message');