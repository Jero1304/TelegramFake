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
  messages: Message[];
};

const contacts: Contact[] = [
  {
    name: 'Joy',
    avatar: './img/avatar_1.jpg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Hai portato a spasso il cane?',
        status: 'received',
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Ricordati di stendere i panni',
        status: 'received',
      },
      {
        date: '10/01/2020 16:15:22',
        message: 'Tutto fatto!',
        status: 'sent',
      },
    ],
  },
  {
    name: 'Rachel',
    avatar: './img/avatar_2.png',
    visible: true,
    messages: [
      {
        date: '20/03/2020 16:30:00',
        message: 'Ciao come stai?',
        status: 'received',
      },
      {
        date: '20/03/2020 16:30:55',
        message: 'Bene grazie! Stasera ci vediamo?',
        status: 'sent',
      },
      {
        date: '20/03/2020 16:35:00',
        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
        status: 'received',
      },
    ],
  },
  {
    name: 'Phoebe',
    avatar: './img/avatar_3.png',
    visible: true,
    messages: [
      {
        date: '28/03/2020 10:10:40',
        message: 'La Marianna va in campagna',
        status: 'sent',
      },
      {
        date: '28/03/2020 10:20:10',
        message: 'Sicuro di non aver sbagliato chat?',
        status: 'received',
      },
      {
        date: '28/03/2020 16:15:22',
        message: 'Ah scusa!',
        status: 'sent',
      },
    ],
  },
  {
    name: 'Ross',
    avatar: './img/avatar_4.jpg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Lo sai che ha aperto una nuova pizzeria?',
        status: 'received',
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Si, ma preferirei andare al cinema',
        status: 'sent',
      },
    ],
  },
  {
    name: 'Monica',
    avatar: './img/avatar_5.jpg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Ricordati di chiamare la nonna',
        status: 'received',
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Va bene, stasera la receivedo',
        status: 'sent',
      },
    ],
  },
  {
    name: 'Chandler',
    avatar: './img/avatar_6.jpg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Ciao Claudia, hai novità?',
        status: 'received',
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Non ancora',
        status: 'sent',
      },
      {
        date: '10/01/2020 15:51:00',
        message: 'Nessuna nuova, buona nuova',
        status: 'received',
      },
    ],
  },
  {
    name: 'Gunter',
    avatar: './img/avatar_7.png',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Fai gli auguri a Martina che è il suo compleanno!',
        status: 'received',
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Grazie per avermelo ricordato, le scrivo subito!',
        status: 'sent',
      },
    ],
  },
  {
    name: 'Carol',
    avatar: './img/avatar_8.jpg',
    visible: true,
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
    ],
  },
];

export { contacts };