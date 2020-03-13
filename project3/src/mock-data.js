let mock = {
    queue: {
        helping: [
            {"name":"Natalie Corneille","time":"13:05:10","question":"rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo","passoff":false},
            {"name":"Deirdre Forst","time":"13:51:28","question":"vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper","passoff":false}
        ],
        waiting: [
            {"name":"Dorey Vedeniktov","time":"13:07:05","question":"nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu","passoff":false},
            {"name":"Tann Sirett","time":"13:17:57","question":"purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique","passoff":true},
            {"name":"Gilburt Kalinovich","time":"13:07:38","question":"magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque","passoff":true},
            {"name":"Anne-corinne Andrick","time":"13:26:29","question":"morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien","passoff":false},
            {"name":"Brittaney Gladyer","time":"13:42:45","question":"montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum","passoff":false},
            {"name":"Druci Welch","time":"13:04:40","question":"nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer","passoff":false},
            {"name":"Joeann Chomiszewski","time":"13:34:05","question":"pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum","passoff":true},
            {"name":"Conrad Tallquist","time":"13:27:46","question":"ipsum primis in faucibus orci luctus et ultrices posuere","passoff":true}
        ]
    },    
    schedule: {
        open: "9:00:00",
        close: "20:00:00",
        data: [
            [["Faythe Smylie"],["Faythe Smylie"],["Faythe Smylie"],["Veda Sellman"],["Veda Sellman","Perle Thirlwall"],["Perle Thirlwall"],[],["Karalee Thomassin"],["Karalee Thomassin","Curry O'Carrol"],["Karalee Thomassin","Curry O'Carrol"],["Karalee Thomassin"]],
            [["Denys Giraldez"],["Denys Giraldez"],["Thaddus Terbruggen"],["Thaddus Terbruggen","Veda Sellman"],["Thaddus Terbruggen","Veda Sellman","Flossie Audley"],["Flossie Audley"],["Flossie Audley"],["Roda Albon"],["Nerita Lerwill","Roda Albon"],["Nerita Lerwill","Roda Albon"],[]],
            [["Faythe Smylie"],["Faythe Smylie"],["Faythe Smylie"],["Veda Sellman"],["Veda Sellman","Perle Thirlwall"],["Perle Thirlwall"],[],["Karalee Thomassin"],["Karalee Thomassin","Curry O'Carrol"],["Karalee Thomassin","Curry O'Carrol"],["Karalee Thomassin"]],
            [["Denys Giraldez"],["Denys Giraldez"],["Thaddus Terbruggen"],["Thaddus Terbruggen","Veda Sellman"],["Thaddus Terbruggen","Veda Sellman","Flossie Audley"],["Flossie Audley"],["Flossie Audley"],["Roda Albon"],["Nerita Lerwill","Roda Albon"],["Nerita Lerwill","Roda Albon"],[]],
            [["Faythe Smylie"],["Faythe Smylie"],["Faythe Smylie"],["Veda Sellman"],["Veda Sellman","Perle Thirlwall"],["Perle Thirlwall"],[],["Karalee Thomassin"],["Karalee Thomassin","Curry O'Carrol"],["Karalee Thomassin","Curry O'Carrol"],["Karalee Thomassin"]],
            [["Denys Giraldez"],["Denys Giraldez"],["Denys Giraldez","Perle Thirlwall"],["Perle Thirlwall"],["Perle Thirlwall"],["Perle Thirlwall"],[],[],[],[],[]]
        ]
    },
    stats: {
        entering: [
            [0.4,0.3,0.6,0.9,1.6,1.4,0.2,3.0,2.8,4.2,3.2],
            [0.5,0.6,0.3,1.4,2.1,1.7,3.5,4.7,3.2,3.8,0.5],
            [0.6,0.4,0.7,1.2,1.9,2.1,0.4,3.7,2.7,4.4,3.8],
            [0.6,0.6,0.5,1.1,2.6,2.3,3.4,5.1,4.0,3.7,0.3],
            [0.8,0.7,0.6,1.5,2.4,2.2,0.6,5.4,6.3,6.0,4.2],
            [0.2,0.4,0.8,1.6,3.2,1.8,0.0,0.0,0.0,0.0,0.0]
        ],
        wait: [
            ["0:06:29","0:01:15","0:11:54","0:02:37","0:03:42","0:03:12","0:06:30","0:00:01","0:19:45","0:09:50","0:02:35"],
            ["0:03:56","0:18:09","0:14:18","0:16:23","0:00:25","0:14:39","0:10:13","0:02:07","0:09:35","0:04:02","0:19:01"],
            ["0:00:38","0:14:53","0:03:41","0:11:58","0:17:45","0:13:31","0:14:28","0:14:04","0:09:01","0:09:23","0:18:01"],
            ["0:19:43","0:05:04","0:09:27","0:04:46","0:01:31","0:14:29","0:01:17","0:03:14","0:13:17","0:03:50","0:06:46"],
            ["0:12:21","0:09:37","0:13:33","0:03:25","0:12:46","0:17:09","0:04:11","0:15:02","0:02:18","0:01:29","0:06:02"],
            ["0:05:38","0:00:30","0:11:35","0:03:32","0:05:32","0:14:22","0:01:16","0:14:29","0:07:43","0:10:06","0:08:36"]
        ],
        helped: [
            ["0:13:16","0:19:50","0:18:46","0:18:43","0:06:32","0:15:07","0:01:20","0:02:13","0:06:28","0:10:55","0:18:50"],
            ["0:12:48","0:16:02","0:05:22","0:08:18","0:06:50","0:14:59","0:18:41","0:07:06","0:10:50","0:16:22","0:19:52"],
            ["0:14:52","0:11:57","0:16:28","0:10:28","0:00:26","0:08:32","0:11:32","0:13:15","0:11:07","0:16:06","0:16:08"],
            ["0:18:17","0:02:45","0:03:45","0:02:57","0:05:17","0:12:21","0:11:44","0:07:00","0:03:32","0:19:16","0:13:45"],
            ["0:08:44","0:07:14","0:13:43","0:06:19","0:03:37","0:08:47","0:16:26","0:05:00","0:02:44","0:05:40","0:12:08"],
            ["0:04:55","0:02:09","0:11:42","0:13:57","0:19:14","0:18:51","0:08:27","0:00:23","0:17:46","0:13:36","0:08:55"]
        ]
    },
    settings: {
        queueName: "Help Queue",
        message: "Leave a question and a room number below. If you need to do a passoff check the box."
    },
    history: [
        {"name":"Mortimer Farrah","date":"2020/01/08","enteredTime":"16:35:04","waitTime":"0:11:43","helpedTime":"0:00:11","helpedBy":"Flossie Audley"},
        {"name":"Natalie Corneille","date":"2020/02/18","enteredTime":"9:02:13","waitTime":"0:01:49","helpedTime":"0:09:53","helpedBy":"Perle Thirlwall"},
        {"name":"Kent Itzkovitch","date":"2020/01/09","enteredTime":"13:54:53","waitTime":"0:08:06","helpedTime":"0:12:52","helpedBy":"Roda Albon"},
        {"name":"Dorey Vedeniktov","date":"2020/03/11","enteredTime":"9:52:25","waitTime":"0:03:44","helpedTime":"0:09:29","helpedBy":"Curry O'Carrol"},
        {"name":"Anne-corinne Andrick","date":"2020/02/24","enteredTime":"15:43:28","waitTime":"0:07:46","helpedTime":"0:14:56","helpedBy":"Veda Sellman"},
        {"name":"Traci Layus","date":"2020/02/27","enteredTime":"16:40:28","waitTime":"0:12:26","helpedTime":"0:10:49","helpedBy":"Curry O'Carrol"},
        {"name":"Jedidiah Bardill","date":"2020/02/23","enteredTime":"11:55:40","waitTime":"0:02:33","helpedTime":"0:05:59","helpedBy":"Roda Albon"},
        {"name":"Gaynor Chalice","date":"2020/02/24","enteredTime":"14:44:17","waitTime":"0:04:37","helpedTime":"0:08:11","helpedBy":"Perle Thirlwall"},
        {"name":"Fenelia Gratten","date":"2020/01/18","enteredTime":"12:16:38","waitTime":"0:13:12","helpedTime":"0:09:27","helpedBy":"Veda Sellman"},
        {"name":"Justin Pywell","date":"2020/01/26","enteredTime":"15:48:47","waitTime":"0:14:07","helpedTime":"0:11:03","helpedBy":"Nerita Lerwill"},
        {"name":"Dewie Maypes","date":"2020/03/07","enteredTime":"19:32:15","waitTime":"0:12:47","helpedTime":"0:17:44","helpedBy":"Flossie Audley"},
        {"name":"Drucill Balentyne","date":"2020/02/28","enteredTime":"15:19:03","waitTime":"0:13:54","helpedTime":"0:10:31","helpedBy":"Curry O'Carrol"},
        {"name":"Abeu Wheelhouse","date":"2020/02/13","enteredTime":"10:21:37","waitTime":"0:13:00","helpedTime":"0:16:36","helpedBy":"Nerita Lerwill"},
        {"name":"Mortimer Farrah","date":"2020/01/28","enteredTime":"16:32:10","waitTime":"0:14:08","helpedTime":"0:11:35","helpedBy":"Veda Sellman"},
        {"name":"Saudra Valois","date":"2020/01/16","enteredTime":"14:06:00","waitTime":"0:07:10","helpedTime":"0:18:32","helpedBy":"Faythe Smylie"},
        {"name":"Fenelia Gratten","date":"2020/01/07","enteredTime":"9:38:23","waitTime":"0:04:40","helpedTime":"0:17:12","helpedBy":"Veda Sellman"},
        {"name":"Mortimer Farrah","date":"2020/01/18","enteredTime":"13:03:02","waitTime":"0:01:55","helpedTime":"0:17:02","helpedBy":"Karalee Thomassin"},
        {"name":"Joeann Chomiszewski","date":"2020/01/20","enteredTime":"16:56:48","waitTime":"0:02:58","helpedTime":"0:09:42","helpedBy":"Nerita Lerwill"},
        {"name":"Filia Fulep","date":"2020/03/06","enteredTime":"19:54:33","waitTime":"0:14:21","helpedTime":"0:17:45","helpedBy":"Roda Albon"},
        {"name":"Jamey Chasemore","date":"2020/02/01","enteredTime":"12:29:56","waitTime":"0:11:35","helpedTime":"0:06:24","helpedBy":"Thaddus Terbruggen"},
        {"name":"Kassie Tatlowe","date":"2020/02/25","enteredTime":"12:42:16","waitTime":"0:11:38","helpedTime":"0:14:09","helpedBy":"Veda Sellman"},
        {"name":"Harwell Lapley","date":"2020/01/30","enteredTime":"18:46:26","waitTime":"0:15:47","helpedTime":"0:16:50","helpedBy":"Thaddus Terbruggen"},
        {"name":"Raoul Kliment","date":"2020/01/21","enteredTime":"19:16:11","waitTime":"0:18:46","helpedTime":"0:02:52","helpedBy":"Nerita Lerwill"},
        {"name":"Traci Layus","date":"2020/01/08","enteredTime":"12:41:00","waitTime":"0:05:14","helpedTime":"0:14:31","helpedBy":"Perle Thirlwall"},
        {"name":"Abeu Wheelhouse","date":"2020/01/21","enteredTime":"13:21:10","waitTime":"0:03:52","helpedTime":"0:00:28","helpedBy":"Perle Thirlwall"},
        {"name":"Zebulon Campos","date":"2020/02/20","enteredTime":"19:23:53","waitTime":"0:16:39","helpedTime":"0:07:50","helpedBy":"Nerita Lerwill"},
        {"name":"Analiese Libreros","date":"2020/02/08","enteredTime":"15:27:54","waitTime":"0:18:26","helpedTime":"0:03:25","helpedBy":"Nerita Lerwill"},
        {"name":"Zebulon Campos","date":"2020/03/06","enteredTime":"12:39:14","waitTime":"0:02:10","helpedTime":"0:15:49","helpedBy":"Roda Albon"},
        {"name":"Brittaney Gladyer","date":"2020/01/12","enteredTime":"14:48:01","waitTime":"0:11:37","helpedTime":"0:14:27","helpedBy":"Curry O'Carrol"},
        {"name":"Brittaney Gladyer","date":"2020/01/06","enteredTime":"14:54:27","waitTime":"0:12:12","helpedTime":"0:04:48","helpedBy":"Thaddus Terbruggen"},
        {"name":"Druci Welch","date":"2020/02/21","enteredTime":"16:35:17","waitTime":"0:07:19","helpedTime":"0:07:53","helpedBy":"Karalee Thomassin"},
        {"name":"Gilburt Kalinovich","date":"2020/01/08","enteredTime":"9:59:38","waitTime":"0:14:22","helpedTime":"0:06:33","helpedBy":"Thaddus Terbruggen"},
        {"name":"Rani Coaten","date":"2020/03/02","enteredTime":"14:27:33","waitTime":"0:19:32","helpedTime":"0:03:30","helpedBy":"Karalee Thomassin"},
        {"name":"Traci Layus","date":"2020/03/09","enteredTime":"9:50:03","waitTime":"0:04:59","helpedTime":"0:11:17","helpedBy":"Perle Thirlwall"},
        {"name":"Natalie Corneille","date":"2020/01/20","enteredTime":"13:55:45","waitTime":"0:12:28","helpedTime":"0:18:47","helpedBy":"Flossie Audley"},
        {"name":"Fenelia Gratten","date":"2020/03/10","enteredTime":"19:57:03","waitTime":"0:11:01","helpedTime":"0:11:27","helpedBy":"Nerita Lerwill"},
        {"name":"Jamey Chasemore","date":"2020/01/31","enteredTime":"19:16:39","waitTime":"0:04:24","helpedTime":"0:16:58","helpedBy":"Roda Albon"},
        {"name":"Zebulon Campos","date":"2020/02/24","enteredTime":"15:13:38","waitTime":"0:17:11","helpedTime":"0:19:43","helpedBy":"Denys Giraldez"},
        {"name":"Traci Layus","date":"2020/02/19","enteredTime":"19:47:29","waitTime":"0:07:36","helpedTime":"0:11:38","helpedBy":"Nerita Lerwill"},
        {"name":"Jamey Chasemore","date":"2020/02/18","enteredTime":"15:25:47","waitTime":"0:11:40","helpedTime":"0:15:07","helpedBy":"Faythe Smylie"},
        {"name":"Harwell Lapley","date":"2020/01/14","enteredTime":"16:21:53","waitTime":"0:14:17","helpedTime":"0:17:29","helpedBy":"Curry O'Carrol"},
        {"name":"Kent Itzkovitch","date":"2020/01/06","enteredTime":"15:46:26","waitTime":"0:06:06","helpedTime":"0:00:22","helpedBy":"Karalee Thomassin"},
        {"name":"Bogart Kernock","date":"2020/01/27","enteredTime":"14:59:53","waitTime":"0:04:28","helpedTime":"0:17:57","helpedBy":"Perle Thirlwall"},
        {"name":"Dewie Maypes","date":"2020/02/24","enteredTime":"18:25:08","waitTime":"0:08:09","helpedTime":"0:10:39","helpedBy":"Nerita Lerwill"},
        {"name":"Natalie Corneille","date":"2020/02/12","enteredTime":"18:21:45","waitTime":"0:06:54","helpedTime":"0:03:38","helpedBy":"Karalee Thomassin"},
        {"name":"Val Kitchenside","date":"2020/02/10","enteredTime":"19:02:58","waitTime":"0:04:17","helpedTime":"0:03:13","helpedBy":"Curry O'Carrol"},
        {"name":"Anne-corinne Andrick","date":"2020/03/09","enteredTime":"11:53:16","waitTime":"0:07:53","helpedTime":"0:08:43","helpedBy":"Veda Sellman"},
        {"name":"Rani Coaten","date":"2020/01/20","enteredTime":"17:09:25","waitTime":"0:19:24","helpedTime":"0:04:59","helpedBy":"Curry O'Carrol"},
        {"name":"Bogart Kernock","date":"2020/02/14","enteredTime":"13:03:55","waitTime":"0:02:29","helpedTime":"0:18:15","helpedBy":"Curry O'Carrol"},
        {"name":"Gaynor Chalice","date":"2020/01/15","enteredTime":"10:52:30","waitTime":"0:02:45","helpedTime":"0:12:19","helpedBy":"Denys Giraldez"},
        {"name":"Gaynor Chalice","date":"2020/02/04","enteredTime":"18:48:01","waitTime":"0:04:15","helpedTime":"0:15:17","helpedBy":"Curry O'Carrol"},
        {"name":"Kassie Tatlowe","date":"2020/02/06","enteredTime":"11:10:34","waitTime":"0:06:39","helpedTime":"0:00:31","helpedBy":"Curry O'Carrol"},
        {"name":"Analiese Libreros","date":"2020/02/01","enteredTime":"16:33:35","waitTime":"0:09:47","helpedTime":"0:04:49","helpedBy":"Karalee Thomassin"},
        {"name":"Kent Itzkovitch","date":"2020/02/07","enteredTime":"10:22:24","waitTime":"0:06:01","helpedTime":"0:01:53","helpedBy":"Nerita Lerwill"},
        {"name":"Corinna Wiseman","date":"2020/03/05","enteredTime":"13:14:34","waitTime":"0:17:39","helpedTime":"0:18:35","helpedBy":"Thaddus Terbruggen"},
        {"name":"Harwell Lapley","date":"2020/01/15","enteredTime":"19:57:24","waitTime":"0:00:49","helpedTime":"0:17:21","helpedBy":"Veda Sellman"},
        {"name":"Sean Kinder","date":"2020/01/17","enteredTime":"17:36:56","waitTime":"0:07:20","helpedTime":"0:02:46","helpedBy":"Curry O'Carrol"},
        {"name":"Gaynor Chalice","date":"2020/01/10","enteredTime":"12:04:48","waitTime":"0:15:23","helpedTime":"0:11:47","helpedBy":"Flossie Audley"},
        {"name":"Abeu Wheelhouse","date":"2020/01/10","enteredTime":"14:25:54","waitTime":"0:03:22","helpedTime":"0:07:37","helpedBy":"Veda Sellman"},
        {"name":"Conrad Tallquist","date":"2020/02/15","enteredTime":"19:51:40","waitTime":"0:12:07","helpedTime":"0:07:22","helpedBy":"Roda Albon"}
    ]
}

export default mock;