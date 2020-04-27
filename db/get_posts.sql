select p.author_id, p.title, p.img, p.content, u.username, u.profile_pic
from posts p
join users u on u.id = p.author_id
where u.id =$1;