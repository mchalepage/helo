CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INTEGER REFERENCES users(id)
);

INSERT INTO posts
(title, img, content)
VALUES
('ernest', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ernest_Borgnine_McHale_McHale%27s_Navy_1963.JPG/220px-Ernest_Borgnine_McHale_McHale%27s_Navy_1963.JPG', 'this is ernest borgnine'), 
('kevin_mchale', 'https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/media/legends-mchale-970x442.jpg', 'this is kevin mchale'), 
('joel mchale', 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Joel_McHale_2014_Comic_Con_%28cropped%29.jpg', 'this is joel mchale');

INSERT INTO users
(username, password, profile_pic)
VALUES
('Vanessa', 'pass', 'https://i.pinimg.com/originals/32/09/c0/3209c039c412745c026a4b6e400a9eae.jpg'), 
('Kyle', 'pass2', 'https://res.cloudinary.com/inbound-org/image/twitter/w_200/189315459.jpg'), 
('Kelsey', 'pass3', 'https://image.shutterstock.com/image-photo/face-blonde-happy-bride-before-260nw-546759520.jpg');