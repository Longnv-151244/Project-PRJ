create table Roles(
	id int primary key identity(1,1),
	name varchar(32) not null
)
GO
SET IDENTITY_INSERT Roles OFF
GO

create table Users(
	id int primary key identity(1,1),
	username varchar(32) not null,
	[password] varchar(32) not null,
	first_name nvarchar(16),
	last_name nvarchar(16),
	avatar varchar(255),
	role_ID int references Roles(id) not null,
	t_create smalldatetime not null,
	t_lastOnline smalldatetime,
	email varchar(64) not null,
	[status] BIT NOT NULL DEFAULT 0,
)
GO
SET IDENTITY_INSERT Users OFF
GO

create table Category(
	id int primary key identity(1,1),
	name varchar(32) not null
)
GO
SET IDENTITY_INSERT Category OFF
GO

create table Albums(
	id int primary key identity(1,1),
	name nvarchar(64) not null,
	author nvarchar(64) not null,
	category_ID int references Category(id) not null,
	duration varchar(10) not null,
	image varchar(255),
	path varchar(255) not null,
	t_create smalldatetime not null,
	t_lastUpdate smalldatetime
)
GO
SET IDENTITY_INSERT Albums OFF
GO

create table [liked](
	id int primary key identity(1,1),
	[user_ID] int references Users(id) not null,
	[album_ID] int references Albums(id) not null,
	t_lastUpdate smalldatetime not null
)
GO
SET IDENTITY_INSERT [liked] OFF
GO

create table [Action](
	id int primary key identity(1,1),
	name varchar(16) not null
)
GO
SET IDENTITY_INSERT [Action] OFF
GO

create table history_Album(
	id int primary key identity(1,1),
	[user_ID] int not null,
	[user_name] varchar(32) not null,
	[album_ID] int not null,
	[album_name] nvarchar(64) not null,
	t_lastUpdate smalldatetime not null,
	[action_ID] int references [Action](id) not null
)
GO
SET IDENTITY_INSERT history_Album OFF
GO

create table Background(
	id int primary key identity(1,1),
	name varchar(16) not null,
	path varchar(255) not null
)
GO
SET IDENTITY_INSERT history_Album OFF
GO

create table Slider(
	id int primary key identity(1,1),
	[album_ID] int references Albums(id) not null,
	heading nvarchar(255),
	text nvarchar(255)
)
GO
SET IDENTITY_INSERT history_Album OFF
GO

create table [Message](
	id int primary key identity(1,1),
	name varchar(32),
	describe nvarchar(255)
)
GO
SET IDENTITY_INSERT [Message] OFF
GO

