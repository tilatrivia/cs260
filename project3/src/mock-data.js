let mock = {
    nextId: 71,
    queue: {
        helping: [
            {"id":61,"name":"Jamey Chasemore","time":"2020-03-17T13:22:06-06:00","question":"ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce","passoff":false},
            {"id":62,"name":"Vania Iverson","time":"2020-03-17T13:28:40-06:00","question":"dapibus dolor vel est donec odio justo sollicitudin ut suscipit a","passoff":false}
        ],
        waiting: [
            {"id":63,"name":"Brittaney Gladyer","time":"2020-03-17T13:12:15-06:00","question":"nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis","passoff":false},
            {"id":64,"name":"Carmella Hehir","time":"2020-03-17T13:15:34-06:00","question":"quis justo maecenas rhoncus aliquam lacus morbi quis tortor","passoff":false},
            {"id":65,"name":"Rani Coaten","time":"2020-03-17T13:29:16-06:00","question":"sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt","passoff":false},
            {"id":66,"name":"Traci Layus","time":"2020-03-17T13:29:16-45:00","question":"odio porttitor id consequat in consequat","passoff":true},
            {"id":67,"name":"Rodolph Robelin","time":"2020-03-17T13:19:32-06:00","question":"donec ut dolor morbi vel lectus in quam","passoff":false},
            {"id":68,"name":"Bogart Kernock","time":"2020-03-17T13:21:08-06:00","question":"dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at","passoff":true},
            {"id":69,"name":"Justin Pywell","time":"2020-03-17T13:24:55-06:00","question":"suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero","passoff":true},
            {"id":70,"name":"Jedidiah Bardill","time":"2020-03-17T13:31:13-06:00","question":"dui vel nisl duis ac nibh fusce lacus purus aliquet at","passoff":false}
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
        {"id":1,"name":"Joeann Chomiszewski","date":"2020/02/19","enteredTime":"9:12:58","waitTime":"0:18:04","helpedTime":"0:02:53","helpedBy":"Denys Giraldez"},
        {"id":2,"name":"Joeann Chomiszewski","date":"2020/01/12","enteredTime":"19:28:07","waitTime":"0:01:40","helpedTime":"0:13:21","helpedBy":"Flossie Audley"},
        {"id":3,"name":"Gilburt Kalinovich","date":"2020/02/02","enteredTime":"10:27:48","waitTime":"0:14:17","helpedTime":"0:15:46","helpedBy":"Roda Albon"},
        {"id":4,"name":"Llywellyn Naris","date":"2020/01/10","enteredTime":"17:14:32","waitTime":"0:01:16","helpedTime":"0:08:36","helpedBy":"Veda Sellman"},
        {"id":5,"name":"Kent Itzkovitch","date":"2020/03/02","enteredTime":"19:15:52","waitTime":"0:09:42","helpedTime":"0:13:01","helpedBy":"Faythe Smylie"},
        {"id":6,"name":"Mortimer Farrah","date":"2020/03/03","enteredTime":"15:41:55","waitTime":"0:03:18","helpedTime":"0:02:55","helpedBy":"Roda Albon"},
        {"id":7,"name":"Sergei Seebright","date":"2020/01/15","enteredTime":"12:31:45","waitTime":"0:13:13","helpedTime":"0:16:19","helpedBy":"Denys Giraldez"},
        {"id":8,"name":"Fenelia Gratten","date":"2020/03/01","enteredTime":"15:45:47","waitTime":"0:12:49","helpedTime":"0:06:43","helpedBy":"Karalee Thomassin"},
        {"id":9,"name":"Jedidiah Bardill","date":"2020/01/19","enteredTime":"16:04:12","waitTime":"0:19:28","helpedTime":"0:03:26","helpedBy":"Denys Giraldez"},
        {"id":10,"name":"Sean Kinder","date":"2020/03/11","enteredTime":"13:43:17","waitTime":"0:07:39","helpedTime":"0:03:50","helpedBy":"Flossie Audley"},
        {"id":11,"name":"Tann Sirett","date":"2020/02/10","enteredTime":"14:54:51","waitTime":"0:19:04","helpedTime":"0:06:31","helpedBy":"Perle Thirlwall"},
        {"id":12,"name":"Dewie Maypes","date":"2020/02/12","enteredTime":"19:55:59","waitTime":"0:02:29","helpedTime":"0:08:14","helpedBy":"Thaddus Terbruggen"},
        {"id":13,"name":"Zebulon Campos","date":"2020/02/24","enteredTime":"12:54:10","waitTime":"0:01:51","helpedTime":"0:15:18","helpedBy":"Perle Thirlwall"},
        {"id":14,"name":"Rani Coaten","date":"2020/02/08","enteredTime":"16:54:30","waitTime":"0:05:50","helpedTime":"0:04:29","helpedBy":"Denys Giraldez"},
        {"id":15,"name":"Drucill Balentyne","date":"2020/03/04","enteredTime":"10:37:48","waitTime":"0:10:50","helpedTime":"0:07:31","helpedBy":"Flossie Audley"},
        {"id":16,"name":"Kent Itzkovitch","date":"2020/02/20","enteredTime":"16:03:33","waitTime":"0:19:54","helpedTime":"0:10:40","helpedBy":"Karalee Thomassin"},
        {"id":17,"name":"Raoul Kliment","date":"2020/02/17","enteredTime":"10:16:39","waitTime":"0:16:17","helpedTime":"0:15:44","helpedBy":"Curry O'Carrol"},
        {"id":18,"name":"Jedidiah Bardill","date":"2020/03/05","enteredTime":"13:55:14","waitTime":"0:09:35","helpedTime":"0:08:28","helpedBy":"Flossie Audley"},
        {"id":19,"name":"Rani Coaten","date":"2020/02/21","enteredTime":"17:26:04","waitTime":"0:10:54","helpedTime":"0:00:35","helpedBy":"Karalee Thomassin"},
        {"id":20,"name":"Rodolph Robelin","date":"2020/01/24","enteredTime":"11:06:32","waitTime":"0:10:28","helpedTime":"0:14:58","helpedBy":"Faythe Smylie"},
        {"id":21,"name":"Fenelia Gratten","date":"2020/03/11","enteredTime":"19:30:33","waitTime":"0:06:26","helpedTime":"0:13:32","helpedBy":"Flossie Audley"},
        {"id":22,"name":"Mortimer Farrah","date":"2020/02/06","enteredTime":"10:33:33","waitTime":"0:03:05","helpedTime":"0:00:20","helpedBy":"Denys Giraldez"},
        {"id":23,"name":"Anne-corinne Andrick","date":"2020/02/16","enteredTime":"13:20:41","waitTime":"0:16:10","helpedTime":"0:09:54","helpedBy":"Veda Sellman"},
        {"id":24,"name":"Dulciana Fotheringham","date":"2020/01/29","enteredTime":"16:50:18","waitTime":"0:08:16","helpedTime":"0:12:49","helpedBy":"Faythe Smylie"},
        {"id":25,"name":"Zebulon Campos","date":"2020/02/21","enteredTime":"17:05:24","waitTime":"0:11:20","helpedTime":"0:10:20","helpedBy":"Roda Albon"},
        {"id":26,"name":"Gilburt Kalinovich","date":"2020/01/14","enteredTime":"15:09:42","waitTime":"0:10:58","helpedTime":"0:13:00","helpedBy":"Curry O'Carrol"},
        {"id":27,"name":"Kassie Tatlowe","date":"2020/01/15","enteredTime":"11:42:09","waitTime":"0:11:20","helpedTime":"0:03:18","helpedBy":"Thaddus Terbruggen"},
        {"id":28,"name":"Dione Dillon","date":"2020/01/11","enteredTime":"15:02:09","waitTime":"0:14:06","helpedTime":"0:00:11","helpedBy":"Nerita Lerwill"},
        {"id":29,"name":"Traci Layus","date":"2020/01/28","enteredTime":"12:54:30","waitTime":"0:15:46","helpedTime":"0:17:01","helpedBy":"Karalee Thomassin"},
        {"id":30,"name":"Gilburt Kalinovich","date":"2020/02/21","enteredTime":"15:43:23","waitTime":"0:16:47","helpedTime":"0:07:35","helpedBy":"Curry O'Carrol"},
        {"id":31,"name":"Rodolph Robelin","date":"2020/02/18","enteredTime":"17:46:48","waitTime":"0:01:31","helpedTime":"0:13:33","helpedBy":"Flossie Audley"},
        {"id":32,"name":"Tann Sirett","date":"2020/03/03","enteredTime":"11:45:51","waitTime":"0:07:58","helpedTime":"0:16:24","helpedBy":"Nerita Lerwill"},
        {"id":33,"name":"Dewie Maypes","date":"2020/02/15","enteredTime":"16:34:32","waitTime":"0:00:15","helpedTime":"0:04:06","helpedBy":"Perle Thirlwall"},
        {"id":34,"name":"Dorey Vedeniktov","date":"2020/02/02","enteredTime":"17:40:43","waitTime":"0:08:35","helpedTime":"0:18:50","helpedBy":"Roda Albon"},
        {"id":35,"name":"Vania Iverson","date":"2020/01/28","enteredTime":"12:38:39","waitTime":"0:18:05","helpedTime":"0:07:45","helpedBy":"Denys Giraldez"},
        {"id":36,"name":"Joeann Chomiszewski","date":"2020/01/28","enteredTime":"12:19:43","waitTime":"0:17:46","helpedTime":"0:14:06","helpedBy":"Veda Sellman"},
        {"id":37,"name":"Rani Coaten","date":"2020/01/21","enteredTime":"12:35:00","waitTime":"0:07:00","helpedTime":"0:13:13","helpedBy":"Nerita Lerwill"},
        {"id":38,"name":"Rodolph Robelin","date":"2020/01/09","enteredTime":"9:23:08","waitTime":"0:13:39","helpedTime":"0:02:15","helpedBy":"Perle Thirlwall"},
        {"id":39,"name":"Corinna Wiseman","date":"2020/02/28","enteredTime":"9:58:22","waitTime":"0:00:43","helpedTime":"0:19:09","helpedBy":"Perle Thirlwall"},
        {"id":40,"name":"Zebulon Campos","date":"2020/01/11","enteredTime":"13:59:06","waitTime":"0:08:52","helpedTime":"0:03:38","helpedBy":"Denys Giraldez"},
        {"id":41,"name":"Tann Sirett","date":"2020/02/19","enteredTime":"10:38:37","waitTime":"0:19:47","helpedTime":"0:06:20","helpedBy":"Karalee Thomassin"},
        {"id":42,"name":"Tann Sirett","date":"2020/03/12","enteredTime":"12:21:28","waitTime":"0:08:07","helpedTime":"0:01:58","helpedBy":"Denys Giraldez"},
        {"id":43,"name":"Fenelia Gratten","date":"2020/01/18","enteredTime":"16:32:20","waitTime":"0:06:26","helpedTime":"0:03:04","helpedBy":"Curry O'Carrol"},
        {"id":44,"name":"Justin Pywell","date":"2020/01/21","enteredTime":"15:05:45","waitTime":"0:14:03","helpedTime":"0:14:13","helpedBy":"Perle Thirlwall"},
        {"id":45,"name":"Filia Fulep","date":"2020/02/09","enteredTime":"9:57:15","waitTime":"0:08:22","helpedTime":"0:05:00","helpedBy":"Roda Albon"},
        {"id":46,"name":"Dione Dillon","date":"2020/01/07","enteredTime":"9:21:55","waitTime":"0:01:12","helpedTime":"0:11:02","helpedBy":"Nerita Lerwill"},
        {"id":47,"name":"Saudra Valois","date":"2020/02/22","enteredTime":"11:24:03","waitTime":"0:03:14","helpedTime":"0:12:22","helpedBy":"Perle Thirlwall"},
        {"id":48,"name":"Rani Coaten","date":"2020/03/09","enteredTime":"9:26:14","waitTime":"0:05:49","helpedTime":"0:09:39","helpedBy":"Karalee Thomassin"},
        {"id":49,"name":"Corinna Wiseman","date":"2020/01/30","enteredTime":"16:14:00","waitTime":"0:10:34","helpedTime":"0:09:55","helpedBy":"Karalee Thomassin"},
        {"id":50,"name":"Fenelia Gratten","date":"2020/02/10","enteredTime":"11:28:47","waitTime":"0:04:16","helpedTime":"0:13:21","helpedBy":"Thaddus Terbruggen"},
        {"id":51,"name":"Fenelia Gratten","date":"2020/01/11","enteredTime":"15:31:56","waitTime":"0:02:24","helpedTime":"0:18:48","helpedBy":"Curry O'Carrol"},
        {"id":52,"name":"Rani Coaten","date":"2020/02/15","enteredTime":"17:37:43","waitTime":"0:03:24","helpedTime":"0:18:21","helpedBy":"Thaddus Terbruggen"},
        {"id":53,"name":"Jedidiah Bardill","date":"2020/02/24","enteredTime":"15:33:51","waitTime":"0:01:20","helpedTime":"0:00:46","helpedBy":"Denys Giraldez"},
        {"id":54,"name":"Gaynor Chalice","date":"2020/01/26","enteredTime":"17:29:41","waitTime":"0:05:11","helpedTime":"0:01:51","helpedBy":"Roda Albon"},
        {"id":55,"name":"Kent Itzkovitch","date":"2020/01/12","enteredTime":"16:14:54","waitTime":"0:07:38","helpedTime":"0:19:26","helpedBy":"Nerita Lerwill"},
        {"id":56,"name":"Natalie Corneille","date":"2020/02/02","enteredTime":"11:38:08","waitTime":"0:05:24","helpedTime":"0:05:32","helpedBy":"Denys Giraldez"},
        {"id":57,"name":"Analiese Libreros","date":"2020/02/04","enteredTime":"19:08:36","waitTime":"0:17:59","helpedTime":"0:10:46","helpedBy":"Perle Thirlwall"},
        {"id":58,"name":"Justin Pywell","date":"2020/02/12","enteredTime":"10:54:35","waitTime":"0:18:08","helpedTime":"0:04:08","helpedBy":"Roda Albon"},
        {"id":59,"name":"Llywellyn Naris","date":"2020/01/25","enteredTime":"14:17:21","waitTime":"0:00:25","helpedTime":"0:02:42","helpedBy":"Faythe Smylie"},
        {"id":60,"name":"Fenelia Gratten","date":"2020/02/09","enteredTime":"18:30:00","waitTime":"0:04:52","helpedTime":"0:08:13","helpedBy":"Faythe Smylie"}
    ]
}

export default mock;