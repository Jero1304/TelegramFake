type MessageStatus = 'received' | 'sent';

type Message = {
  date: string;
  message: string;
  status: MessageStatus;
};

type Contact = {
  name: string;
  avatar: string;
  visible: boolean;
  isOnline:boolean;
  messages: Message[];
};

const contacts: Contact[] = [
  {
    name: 'Joey',
    avatar: 'https://i.pinimg.com/474x/d7/e7/a8/d7e7a8679c35c633bbd87ce4e7ce5f69.jpg',
    visible: true,
    isOnline:false,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Ehi, come va la vita, amico?',
        status: 'received',
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Tutto bene, Joey! Hai trovato una nuova ragazza?',
        status: 'sent',
      },
      {
        date: '10/01/2020 15:51:00',
        message: 'Ancora no, ma sto cercando!',
        status: 'received',
      },
      // Nuovi messaggi
      {
        date: '11/01/2020 10:15:00',
        message: 'Hai qualche consiglio per il mio prossimo appuntamento?',
        status: 'received',
      },
      {
        date: '11/01/2020 10:20:00',
        message: 'Sicuro! Devi essere te stesso e divertirti.',
        status: 'sent',
      },
      {
        date: '11/01/2020 10:25:00',
        message: 'Grazie, Joey! Sarò me stesso e mi divertirò.',
        status: 'received',
      },
      {
        date: '12/01/2020 14:30:00',
        message: 'Come va il tuo lavoro di attore?',
        status: 'received',
      },
      {
        date: '12/01/2020 14:35:00',
        message: 'Sto cercando nuove opportunità. Incrociamo le dita!',
        status: 'sent',
      },
      {
        date: '12/01/2020 14:40:00',
        message: 'In bocca al lupo, Joey!',
        status: 'received',
      },
    ],
  },
  {
    name: 'Rachel',
    avatar: 'https://i.pinimg.com/564x/c1/05/a5/c105a5b1b1961c4958859d80a69cdaf8.jpg',
    visible: true,
    isOnline:true,
    messages: [
      {
        date: '20/03/2020 16:30:00',
        message: 'Ciao, come stai?',
        status: 'received',
      },
      {
        date: '20/03/2020 16:30:55',
        message: 'Bene grazie! Stasera ci vediamo?',
        status: 'sent',
      },
      {
        date: '20/03/2020 16:35:00',
        message: 'Mi piacerebbe, ma devo andare a fare la spesa.',
        status: 'received',
      },
      // Nuovi messaggi
      {
        date: '21/03/2020 11:00:00',
        message: "Hai visto l'ultimo vestito che ho comprato?",
        status: 'received',
      },
      {
        date: '21/03/2020 11:05:00',
        message: 'Sì, è bellissimo! Ti sta benissimo.',
        status: 'sent',
      },
      {
        date: '21/03/2020 11:10:00',
        message: 'Grazie, Rachel! Dovremmo fare shopping insieme.',
        status: 'received',
      },
      {
        date: '22/03/2020 09:30:00',
        message: 'Come sta Emma?',
        status: 'received',
      },
      {
        date: '22/03/2020 09:35:00',
        message: 'Cresce così velocemente! È adorabile.',
        status: 'sent',
      },
      {
        date: '22/03/2020 09:40:00',
        message: 'Mi mancate entrambi.',
        status: 'received',
      },
    ],
  },
  {
    name: 'Phoebe',
    avatar: 'https://i.pinimg.com/474x/ac/13/7f/ac137f4f4c3d00435827ea0ba39f7b2c.jpg',
    visible: true,
    isOnline:true,
    messages: [
      {
        date: '12/03/2020 14:50:00', // Cambia questa data
        message: 'Phoebe, puoi suonare una delle tue canzoni per me?',
        status: 'received',
      },
      {
        date: '12/03/2020 15:00:00', // Cambia questa data
        message: 'Certo! Ecco una canzone sulla smelly cat:',
        status: 'sent',
      },
      {
        date: '12/03/2020 15:05:00', // Cambia questa data
        message: 'Smelly cat, smelly cat, what are they feeding you?',
        status: 'sent',
      },
      {
        date: '12/03/2020 15:10:00', // Cambia questa data
        message: 'Lo adoro! Sei fantastica, Phoebe.',
        status: 'received',
      },
      {
        date: '10/03/2020 11:10:00', // Cambia questa data
        message: 'Hai visto un uccello con un cappello?',
        status: 'received',
      },
      {
        date: '10/03/2020 11:35:00', // Cambia questa data
        message: 'No, ma chissà che storia avrebbe da raccontare!',
        status: 'sent',
      },
    ],
  },
  {
    name: 'Ross',
    avatar: 'https://i.pinimg.com/474x/23/63/8c/23638c91463820b498947629f5d04c2d.jpg',
    visible: true,
    isOnline:false,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Hai sentito che ha aperto una nuova pizzeria?',
        status: 'received',
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Sì, ma preferirei andare al cinema.',
        status: 'sent',
      },
      // Nuovi messaggi
      {
        date: '11/01/2020 13:45:00',
        message: 'Ho fatto una nuova scoperta sui dinosauri!',
        status: 'sent',
      },
      {
        date: '11/01/2020 13:50:00',
        message: 'Seriamente? Dimmi di più!',
        status: 'received',
      },
      {
        date: '11/01/2020 13:55:00',
        message: 'Abbiamo scoperto una nuova specie di dinosauro azzurro!',
        status: 'sent',
      },
      {
        date: '12/01/2020 08:30:00',
        message: 'Come sta Ben?',
        status: 'received',
      },
      {
        date: '12/01/2020 08:35:00',
        message: 'Ben sta bene e cresce velocemente!',
        status: 'sent',
      },
      {
        date: '12/01/2020 08:40:00',
        message: 'Devo portarlo al museo dei dinosauri un giorno.',
        status: 'sent',
      },
    ],
  },
  {
    name: 'Monica',
    avatar: 'https://i.pinimg.com/474x/e1/ce/7e/e1ce7e1a46556238558811d165b0d5b5.jpg',
    visible: true,
    isOnline:false,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Ricordati di chiamare la nonna.',
        status: 'received',
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Va bene, stasera la receivedo.',
        status: 'sent',
      },
      // Nuovi messaggi
      {
        date: '11/01/2020 10:45:00',
        message: 'Stai preparando una delle tue famose lasagne?',
        status: 'received',
      },
      {
        date: '11/01/2020 10:50:00',
        message: 'Sì, stasera ci sarà lasagna per cena!',
        status: 'sent',
      },
      {
        date: '11/01/2020 10:55:00',
        message: "Non vedo l'ora! Hai una ricetta segreta?",
        status: 'received',
      },
      {
        date: '12/01/2020 17:00:00',
        message: `Hai sentito l'ultima puntata di "Cuochi da incubo"?`,
        status: 'received',
      },
      {
        date: '12/01/2020 17:05:00',
        message: 'Sì, è stata divertente! Vorrei partecipare a uno di quei programmi un giorno.',
        status: 'sent',
      },
      {
        date: '12/01/2020 17:10:00',
        message: 'Saresti fantastica!',
        status: 'received',
      },
    ],
  },
  {
    name: 'Chandler',
    avatar: 'https://i.pinimg.com/474x/b1/e3/85/b1e385cf11af6ed1c250f690233ab0f8.jpg',
    visible: true,
    isOnline:true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Ciao Claudia, hai novità?',
        status: 'received',
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Non ancora.',
        status: 'sent',
      },
      {
        date: '10/01/2020 15:51:00',
        message: 'Nessuna nuova, buona nuova.',
        status: 'received',
      },
      // Nuovi messaggi
      {
        date: '11/01/2020 09:15:00',
        message: 'Hai fatto nuove battute divertenti?',
        status: 'received',
      },
      {
        date: '11/01/2020 09:20:00',
        message: 'Sto lavorando su una nuova barzelletta. Sarà epica!',
        status: 'sent',
      },
      {
        date: '11/01/2020 09:25:00',
        message: "Non vedo l'ora di sentirla!",
        status: 'received',
      },
      {
        date: '12/01/2020 14:30:00',
        message: 'Hai mai pensato di scrivere un libro sulla tua vita?',
        status: 'received',
      },
      {
        date: '12/01/2020 14:35:00',
        message: 'Sarebbe una lettura interessante!',
        status: 'sent',
      },
      {
        date: '12/01/2020 14:40:00',
        message: 'Forse un giorno lo farò.',
        status: 'sent',
      },
    ],
  },
  {
    name: 'Gunther',
    avatar: 'https://d1qxviojg2h5lt.cloudfront.net/images/01FJT9ZCQHHHKG8GKFBB7J4JWM/james.michael.tyler.friends.webp',
    visible: true,
    isOnline:true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: "Rachel, c'è caffè?",
        status: 'received',
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Sempre, Gunther!',
        status: 'sent',
      },
      // Nuovi messaggi
      {
        date: '11/01/2020 09:00:00',
        message: 'Cosa ne pensi di Ross?',
        status: 'received',
      },
      {
        date: '11/01/2020 09:05:00',
        message: 'È un bravo ragazzo, anche se ha una passione per i dinosauri.',
        status: 'sent',
      },
      {
        date: '11/01/2020 09:10:00',
        message: 'Dovresti aiutarlo a dichiararsi a Rachel!',
        status: 'received',
      },
      {
        date: '12/01/2020 17:15:00',
        message: 'Cosa ne pensi di Monica?',
        status: 'received',
      },
      {
        date: '12/01/2020 17:20:00',
        message: 'È una cuoca incredibile! Adoro il suo cibo.',
        status: 'sent',
      },
      {
        date: '12/01/2020 17:25:00',
        message: 'Hai mai pensato di chiederle un appuntamento?',
        status: 'received',
      },
    ],
  },
  {
    name: 'Carol',
    avatar: 'https://production.listennotes.com/podcasts/stav-abby-matt/interview-with-jane-sibbett-KqUbo3t17VX-H-vU8NehYbQ.300x300.jpg',
    visible: true,
    isOnline:true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Ciao, andiamo a mangiare la pizza stasera?',
        status: 'sent',
      },
      {
        date: '10/01/2020 15:50:00',
        message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
        status: 'received',
      },
      {
        date: '10/01/2020 15:51:00',
        message: 'OK!!',
        status: 'sent',
      },
      // Nuovi messaggi
      {
        date: '11/01/2020 11:45:00',
        message: "Hai visto l'ultimo film che è uscito?",
        status: 'received',
      },
      {
        date: '11/01/2020 11:50:00',
        message: 'No, ma sono curiosa! Dobbiamo andare a vederlo insieme.',
        status: 'sent',
      },
      {
        date: '11/01/2020 11:55:00',
        message: 'Sarebbe fantastico!',
        status: 'received',
      },
      {
        date: '12/01/2020 15:30:00',
        message: 'Hai dei piani per il weekend?',
        status: 'received',
      },
      {
        date: '12/01/2020 15:35:00',
        message: 'Niente di speciale, forse fare una passeggiata al parco.',
        status: 'sent',
      },
      {
        date: '12/01/2020 15:40:00',
        message: 'Posso unirmi a te? Sarebbe divertente.',
        status: 'received',
      },
    ],
  },
  {
    name: 'Janice',
    avatar: 'https://s3-eu-west-1.amazonaws.com/static.screenweek.it/interpretation/original_low-81545.jpg?1456326278',
    visible: true,
    isOnline:false,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Oh mio dio!',
        status: 'received',
      },
      {
        date: '10/01/2020 15:50:00',
        message: "Ehi, cosa c'è di sbagliato?",
        status: 'sent',
      },
      {
        date: '10/01/2020 16:15:22',
        message: 'Niente di sbagliato, è solo... Janice!',
        status: 'sent',
      },
      // Nuovi messaggi
      {
        date: '11/01/2020 08:30:00',
        message: 'Ho visto una fantastica offerta su un negozio online!',
        status: 'received',
      },
      {
        date: '11/01/2020 08:35:00',
        message: 'Oh mio dio, davvero? Dimmi tutto!',
        status: 'sent',
      },
      {
        date: '11/01/2020 08:40:00',
        message: 'Hai bisogno di andare a fare shopping con me!',
        status: 'received',
      },
      {
        date: '12/01/2020 12:00:00',
        message: 'Janice, come sta il tuo piccolo cane?',
        status: 'received',
      },
      {
        date: '12/01/2020 12:05:00',
        message: 'Il mio piccolo cucciolo è adorabile! Vuoi conoscerlo?',
        status: 'sent',
      },
      {
        date: '12/01/2020 12:10:00',
        message: 'Oh mio dio, sì!',
        status: 'received',
      },
    ],
  },
];

export { contacts };
