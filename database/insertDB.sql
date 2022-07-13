insert into Roles(name)
values ('User'),('Admin'),('Admin Manager')

insert into [Action](name)
values ('View'),('Create'),('Update'),('Delete')

insert into Category(name)
values ('Vpop'),('US-UK'),('Lofi')

insert into Users(username, [password], role_ID, t_create, email)
values 
('user_1','admin123',1,'2022-02-22 13:25:00','user_1@gmail.com'),
('admin_1','admin123',2,'2022-02-22 13:25:00','admin_1@gmail.com'),
('admin_manager_1','admin123',3,'2022-02-22 13:25:00','admin_manager_1@gmail.com')

insert into Albums(name, author, category_ID, duration, image, path, t_create)
values
-- Vpop
(N'Đế vương',N'Đình Dũng',1,'04:22','./img/song-img/vpop/de-vuong.jpg','./song-mp3/vpop/de-vuong.mp3','2022-02-22 13:25:00'),
(N'#Catena',N'Tóc Tiên, Tourliver',1,'04:29','./img/song-img/vpop/#catena.jpg','./song-mp3/vpop/#catena.mp3','2022-02-22 13:25:00'),
(N'Anh ơi ở lại',N'ChiPu',1,'05:41','./img/song-img/vpop/anh-oi-o-lai.jpg','./song-mp3/vpop/anh-oi-o-lai.mp3','2022-02-22 13:25:00'),
(N'Ái nộ',N'Masew, Khôi Vũ',1,'03:20','./img/song-img/vpop/ai-no.jpg','./song-mp3/vpop/ai-no.mp3','2022-02-22 13:25:00'),
(N'Thê lương',N'Phúc Chinh',1,'05:13','./img/song-img/vpop/the-luong.jpg','./song-mp3/vpop/the-luong.mp3','2022-02-22 13:25:00'),
(N'SG đau lòng quá',N'Hứa Kim Tuyền, Hoàng Duyên',1,'05:08','./img/song-img/vpop/sg-dau-long-qua.jpg','./song-mp3/vpop/sg-dau-long-qua.mp3','2022-02-22 13:25:00'),
(N'Cưới thôi',N'Masiu, Masew',1,'03:01','./img/song-img/vpop/cuoi-thoi.jpg','./song-mp3/vpop/cuoi-thoi.mp3','2022-02-22 13:25:00'),
(N'Thức giấc',N'DaLAB',1,'04:29','./img/song-img/vpop/thuc-giac.jpg','./song-mp3/vpop/thuc-giac.mp3','2022-02-22 13:25:00'),
(N'Đi về nhà',N'Đen, Justa Tee',1,'03:25','./img/song-img/vpop/di-ve-nha.jpg','./song-mp3/vpop/di-ve-nha.mp3','2022-02-22 13:25:00'),
(N'Gieo quẻ',N'Đen, Hoàng Thùy Linh',1,'04:19','./img/song-img/vpop/gieo-que.jpg','./song-mp3/vpop/gieo-que.mp3','2022-02-22 13:25:00'),
(N'Mang tiền về cho mẹ',N'Đen',1,'06:41','./img/song-img/vpop/mang-tien-ve-cho-me.jpg','./song-mp3/vpop/mang-tien-ve-cho-me.mp3','2022-02-22 13:25:00'),
(N'Rap chậm thôi',N'RPT MCK, RPT Jinn, RZ Ma$',1,'04:09','./img/song-img/vpop/rap-cham-thoi.jpg','./song-mp3/vpop/rap-cham-thoi.mp3','2022-02-22 13:25:00'),
(N'Thủ đô Cypher',N'RPT MCK, Low G,...',1,'02:54','./img/song-img/vpop/thu-do-cypher.jpg','./song-mp3/vpop/thu-do-cypher.mp3','2022-02-22 13:25:00'),
(N'Tháng năm',N'SooBin',1,'03:56','./img/song-img/vpop/thang-nam.jpg','./song-mp3/vpop/thang-nam.mp3','2022-02-22 13:25:00'),
(N'Chiều hôm ấy',N'JayKii',1,'05:17','./img/song-img/vpop/chieu-hom-ay.jpg','./song-mp3/vpop/chieu-hom-ay.mp3','2022-02-22 13:25:00'),
(N'Nàng thơ',N'Hoàng Dũng',1,'05:21','./img/song-img/vpop/nang-tho.jpg','./song-mp3/vpop/nang-tho.mp3','2022-02-22 13:25:00'),
(N'Dân chơi xóm',N'RPT MCK, Justa Tee',1,'03:30','./img/song-img/vpop/dan-choi-xom.jpg','./song-mp3/vpop/dan-choi-xom.mp3','2022-02-22 13:25:00'),
(N'OK',N'BINZ',1,'02:34','./img/song-img/vpop/ok.jpg','./song-mp3/vpop/ok.mp3','2016-10-07 13:25:00'),
(N'Bài Này Chill Phết',N'Đen, MIN',1,'04:33','./img/song-img/vpop/bai-nay-child-phet.jpg','./song-mp3/vpop/bai-nay-child-phet.mp3','2018-10-25 13:25:00'),
-- US-UK
(N'Memories',N'Maroon 5',2,'03:15','./img/song-img/us-uk/memories.jpg','./song-mp3/us-uk/memories.mp3','2022-02-22 13:25:00'),
(N'On my way',N'Alan Walker, Sabrina,..',2,'03:36','./img/song-img/us-uk/on-my-way.jpg','./song-mp3/us-uk/on-my-way.mp3','2022-02-22 13:25:00'),
(N'Señorita',N'Shawn Mendes, Camila,..',2,'03:25','./img/song-img/us-uk/senorita.jpg','./song-mp3/us-uk/senorita.mp3','2022-02-22 13:25:00'),
(N'Im Not Her',N'Clara Mae',2,'03:12','./img/song-img/us-uk/im-not-her.jpg','./song-mp3/us-uk/im-not-her.mp3','2022-02-22 13:25:00'),
(N'Someone You Loved',N'Lewis Capaldi',2,'03:01','./img/song-img/us-uk/someone-you-loved.jpg','./song-mp3/us-uk/someone-you-loved.mp3','2022-02-22 13:25:00'),
(N'Dont Wanna Know',N'Maroon 5',2,'06:18','./img/song-img/us-uk/dont-wanna-know.jpg','./song-mp3/us-uk/dont-wanna-know.mp3','2022-02-22 13:25:00'),
(N'Blinding Lights',N'The Weeknd',2,'03:23','./img/song-img/us-uk/blinding-lights.jpg','./song-mp3/us-uk/blinding-lights.mp3','2022-02-22 13:25:00'),
(N'Dusk Till Dawn',N'ZAYN  Sia',2,'03:55','./img/song-img/us-uk/dusk-till-dawn.jpg','./song-mp3/us-uk/dusk-till-dawn.mp3','2022-02-22 13:25:00'),
(N'Cheap Thrills',N'Sia',2,'04:05','./img/song-img/us-uk/cheap-thrills.jpg','./song-mp3/us-uk/cheap-thrills.mp3','2022-02-22 13:25:00'),
(N'Treat You Better',N'Shawn Mendes',2,'04:16','./img/song-img/us-uk/treat-you-better.jpg','./song-mp3/us-uk/treat-you-better.mp3','2022-02-22 13:25:00'),
(N'Shape of You',N'Ed Sheeran',2,'04:23','./img/song-img/us-uk/shape-of-you.jpg','./song-mp3/us-uk/shape-of-you.mp3','2022-02-22 13:25:00'),
(N'Hello',N'Adele',2,'06:06','./img/song-img/us-uk/hello.jpg','./song-mp3/us-uk/hello.mp3','2022-02-22 13:25:00'),
(N'Yummy',N'Justin Bieber',2,'03:50','./img/song-img/us-uk/yummy.jpg','./song-mp3/us-uk/yummy.mp3','2022-02-22 13:25:00'),
(N'Send My Love',N'Adele',2,'02:22','./img/song-img/us-uk/send-my-love.jpg','./song-mp3/us-uk/send-my-love.mp3','2022-02-22 13:25:00'),
(N'FRIENDS',N'Marshmello, AnneMarie',2,'03:51','./img/song-img/us-uk/friends.jpg','./song-mp3/us-uk/friends.mp3','2022-02-22 13:25:00'),
(N'Perfect',N'Ed Sheeran',2,'04:39','./img/song-img/us-uk/perfect.jpg','./song-mp3/us-uk/perfect.mp3','2016-08-18 13:25:00'),
(N'Legends Never Die',N'Against The Current',2,'02:59','./img/song-img/us-uk/legends-never-die.jpg','./song-mp3/us-uk/legends-never-die.mp3','2017-09-09 13:25:00'),
-- Lofi
(N'Nothin On You',N'BoB, Bruno Mars',3,'03:50','./img/song-img/lofi/nothin-on-you.jpg','./song-mp3/lofi/nothin-on-you.mp3','2022-02-22 13:25:00'),
(N'Lemon Tree',N'Fools Garden',3,'03:44','./img/song-img/lofi/lemon-tree.jpg','./song-mp3/lofi/lemon-tree.mp3','2022-02-22 13:25:00'),
(N'At My Worst',N'Pink Sweat',3,'03:05','./img/song-img/lofi/at-my-worst.jpg','./song-mp3/lofi/at-my-worst.mp3','2022-02-22 13:25:00'),
(N'Mood',N'24kGoldn',3,'02:30','./img/song-img/lofi/mood.jpg','./song-mp3/lofi/mood.mp3','2022-02-22 13:25:00'),
(N'SugarCrash',N'ElyOtto',3,'01:20','./img/song-img/lofi/sugarcrash.jpg','./song-mp3/lofi/sugarcrash.mp3','2022-02-22 13:25:00'),
(N'Positions',N'Ariana Grande',3,'02:57','./img/song-img/lofi/positions.jpg','./song-mp3/lofi/positions.mp3','2022-02-22 13:25:00'),
(N'I Love You Baby',N'Frank Sinatra',3,'03:56','./img/song-img/lofi/i-love-you-baby.jpg','./song-mp3/lofi/i-love-you-baby.mp3','2022-02-22 13:25:00'),
(N'What A Wonderful World',N'Louis Armstrong',3,'02:17','./img/song-img/lofi/what-a-wonderful-world.jpg','./song-mp3/lofi/what-a-wonderful-world.mp3','2022-02-22 13:25:00'),
(N'I Want To Hold Your',N'The Beatles',3,'02:36','./img/song-img/lofi/i-want-to-hold-your.jpg','./song-mp3/lofi/i-want-to-hold-your.mp3','2022-02-22 13:25:00'),
(N'Death Bed Coffee',N'Powfu',3,'02:53','./img/song-img/lofi/death-bed-coffee.jpg','./song-mp3/lofi/death-bed-coffee.mp3','2022-02-22 13:25:00'),
(N'Cant Help Falling In Love',N'Elvis Presley',3,'03:00','./img/song-img/lofi/cant-help-falling-in-love.jpg','./song-mp3/lofi/cant-help-falling-in-love.mp3','2022-02-22 13:25:00'),
(N'Crystal Dolphin',N'Engelwood',3,'01:53','./img/song-img/lofi/crystal-dolphin.jpg','./song-mp3/lofi/crystal-dolphin.mp3','2022-02-22 13:25:00'),
(N'Someone You Loved',N'Lewis Capaldi',3,'03:01','./img/song-img/lofi/someone-you-loved.jpg','./song-mp3/lofi/someone-you-loved.mp3','2022-02-22 13:25:00'),
(N'Let Me Down Slowly',N'Alec Benjamin',3,'02:57','./img/song-img/lofi/let-me-down-slowly.jpg','./song-mp3/lofi/let-me-down-slowly.mp3','2022-02-22 13:25:00'),
(N'Star Shopping',N'Lil Peep, Kryptik',3,'02:22','./img/song-img/lofi/star-shopping.jpg','./song-mp3/lofi/star-shopping.mp3','2022-02-22 13:25:00'),
(N'Be Like That',N'Kane Brown, Swae Lee',3,'03:11','./img/song-img/lofi/be-like-that.jpg','./song-mp3/lofi/be-like-that.mp3','2022-02-22 13:25:00'),
(N'Runaway',N'AURORA',3,'04:08','./img/song-img/lofi/runaway.jpg','./song-mp3/lofi/runaway.mp3','2022-02-22 13:25:00'),
(N'The Girl Ive Never Met',N'Gustixa',3,'04:33','./img/song-img/lofi/the-girl-ive-never-met.jpg','./song-mp3/lofi/the-girl-ive-never-met.mp3','2019-06-20 13:25:00'),
(N'Surrender',N'Natalie Taylor',3,'03:39','./img/song-img/lofi/surrender.jpg','./song-mp3/lofi/surrender.mp3','2019-10-19 13:25:00')
insert into [liked]([user_ID], [album_ID], t_lastUpdate)
values 
(1,1,'2022-02-22 13:25:00')

insert into history_Album([user_ID],[user_name], [album_ID],[album_name], t_lastUpdate, [action_ID])
values
(2,'admin_1',1,N'Đế vương','2022-02-22 14:39:00',3)

insert into Background(name, path)
values 
('Bg-1','./img/bg-gif/gif-1.gif'),
('Bg-2','./img/bg-gif/gif-2.gif'),
('Bg-3','./img/bg-gif/gif-3.gif'),
('Bg-4','./img/bg-gif/gif-4.gif'),
('Bg-5','./img/bg-gif/gif-5.gif'),
('Bg-6','./img/bg-gif/gif-6.gif'),
('Bg-7','./img/bg-gif/gif-7.gif'),
('Bg-8','./img/bg-gif/gif-8.gif'),
('Bg-9','./img/bg-gif/gif-9.gif'),
('Bg-10','./img/bg-gif/gif-10.gif'),
('Bg-11','./img/bg-gif/gif-11.gif'),
('Bg-12','./img/bg-gif/gif-12.gif'),
('Bg-13','./img/bg-gif/gif-13.gif'),
('Bg-14','./img/bg-gif/gif-14.gif'),
('Bg-15','./img/bg-gif/gif-15.gif'),
('Bg-16','./img/bg-gif/gif-16.gif'),
('Bg-17','./img/bg-gif/gif-17.gif'),
('Bg-18','./img/bg-gif/gif-18.gif'),
('Bg-19','./img/bg-gif/gif-19.gif'),
('Bg-20','./img/bg-gif/gif-20.gif'),
('Bg-21','./img/bg-gif/gif-21.gif'),
('Bg-22','./img/bg-gif/gif-22.gif'),
('Bg-23','./img/bg-gif/gif-23.gif'),
('Bg-24','./img/bg-gif/gif-24.gif'),
('Bg-25','./img/bg-gif/gif-25.gif'),
('Bg-26','./img/bg-gif/gif-26.gif'),
('Bg-27','./img/bg-gif/gif-27.gif'),
('Bg-28','./img/bg-gif/gif-28.gif'),
('Bg-29','./img/bg-gif/gif-29.gif'),
('Bg-30','./img/bg-gif/gif-30.gif'),
('Bg-31','./img/bg-gif/gif-31.gif'),
('Bg-32','./img/bg-gif/gif-32.gif'),
('Bg-33','./img/bg-gif/gif-33.gif'),
('Bg-34','./img/bg-gif/gif-34.gif'),
('Bg-35','./img/bg-gif/gif-35.gif'),
('Bg-36','./img/bg-gif/gif-36.gif'),
('Bg-37','./img/bg-gif/gif-37.gif'),
('Bg-38','./img/bg-gif/gif-38.gif'),
('Bg-39','./img/bg-gif/gif-39.gif'),
('Bg-40','./img/bg-gif/gif-40.gif')

insert into Slider([album_ID], heading, text)
values
(50,'Listen Now', 'Listen to deep, lyrical V-Pop songs together!'),
(52,'Discover Today','Discover today with upbeat US-UK music!'),
(54,'Subscribe Today','Sign up to follow the gentle lofi music, relax after work!'),
(51,'Listen Now', 'Listen to deep, lyrical V-Pop songs together!'),
(53,'Discover Today','Discover today with upbeat US-UK music!'),
(55,'Subscribe Today','Sign up to follow the gentle lofi music, relax after work!')

insert into [Message](name, describe)
values
('login_1','Login successfull!'),
('login_2','Username or password is invalid!'),
('login_3','User is not authorized to access this site!'),
('update_user_1','Update successfull!'),
('update_user_2','Password is invalid!'),
('update_user_3','New-password is not same the verify-password!')