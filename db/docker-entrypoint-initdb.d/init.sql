CREATE TABLE `board` ( `idx` int(11) NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `title` varchar(50) NOT NULL, `content` mediumtext NOT NULL, `regdate` datetime NOT NULL, `modidate` datetime NOT
NULL, `passwd` varchar(50) NOT NULL, `hit` int(11) NOT NULL DEFAULT '0', PRIMARY KEY (`idx`) );

INSERT INTO `nodedb`.`board`(`name`,`title`,`content`,`regdate`,`modidate`,`passwd`,`hit`) VALUES ('Dowon','First title','Test contents','2022-07-31 20:50:54','2022-08-23 05:15:54','1234',0);