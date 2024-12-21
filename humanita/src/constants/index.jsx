  export const navbar = [
      {
          id : 1,
          title: 'Philosophie',
          url: '#Philosophie'
      },
      {
          id: 2,
          title: 'Service',
          url: '#Service'
      },
      {
          id: 3,
          title: 'Projekte',
          url: '#Projekte'
      },
      {
          id: 4,
          title: 'Blog',
          url: '#Blog'
      }
  ]

  export const legals = [
      {
        id: 1,
        label: 'Kontakt',
        type: 'text',
        href: './kontakt'
      },
      {
        id: 2,
        label: 'Impressum',
        type: 'text',
        href: './impressum'
      },
      {
        id: 3,
        label: 'Datenschutz',
        type: 'text',
        href: './datenschutz'
      },
      {
        id: 4,
        label: 'Einstellungen',
        type: 'text',
        href: './einstellungen'
      },
      {
        id: 5,
        label: 'Datenverarbeitug',
        type: 'text',
        href: './datenverarbeitung'
      },
      {
        id: 6,
        label: 'Barrierefreiheit',
        type: 'text',
        href: './barrierefreiheit'
      },
  ]

  export const socials = [
      {
        id: 1,
        label: 'Facebook',
        imgSrc: '../src/assets/socials/facebook_logo.svg',
        href: 'https://facebook.com'
      },
      {
        id: 2,
        label: 'Instagram',
        imgSrc: '../src/assets/socials/instagram_logo.svg',
        href: 'https://instagram.com'
      },
      {
        id: 3,
        label: 'X',
        imgSrc: '../src/assets/socials/x_logo.svg',
        href: 'https://x.com'
      },
      {
        id: 4,
        label: 'Youtube',
        imgSrc: '../src/assets/socials/youtube_logo.svg',
        href: 'https://youtube.com',
      },
    ]

  export const hero = {
    header: 'Gemeinsam Wärme schenken: Deine Kleiderspende zählt!',
    text: 'In unseren Schränken schlummern ungenutzte Schätze. Mit deiner Kleiderspende an Huminata hilfst du Bedürftigen. Jede Jacke, jedes Paar Schuhe und jeder Pullover bringt Wärme, Freude und Hoffnung. Gemeinsam machen wir den Unterschied.',
    bgSrc: '../src/assets/hero.jpeg'
  }

  export const philosophy = {
    header: 'Helfen ist unsere Herzensangelegenheit',
    paragraph1: 'Humanita ist mehr als nur eine Organisation, die Kleidung sammelt und verteilt. Unsere Philosophie basiert auf der Überzeugung, dass jede gespendete Kleidung ein Zeichen der Menschlichkeit und Solidarität ist. Wir glauben daran, dass wir gemeinsam eine Gemeinschaft schaffen können, in der niemand ohne die Grundbedürfnisse des Lebens auskommen muss.',
    paragraph2: 'Bei Humanita geht es nicht nur um die physische Unterstützung durch Kleidung, sondern auch um das Vermitteln von Hoffnung und Würde. Wir sind der festen Überzeugung, dass jeder Mensch das Recht auf ein würdevolles Leben hat, unabhängig von seiner finanziellen Lage. Kleidung ist dabei ein Mittel, um nicht nur Wärme und Schutz zu bieten, sondern auch ein Gefühl der Zugehörigkeit und Wertschätzung.',
    img1Scr: '../src/assets/philosophy/philosophy_1.jpeg',
    img1Alt: 'Helfende stehen umarmend im Kreis, Perspektive von unten',
    img2Scr: '../src/assets/philosophy/philosophy_2.jpeg',
    img2Alt: 'Helferin steht am Tisch und sortiert Kleidung'
  }

  export const service = {
    header: 'Bequeme Kleiderspende bei Huminata: Einfach und flexibel',
    paragraph: 'Bei Huminata machen wir das Spenden deiner Kleidungsstücke so einfach wie möglich. Wir bieten dir die Möglichkeit, deine Spenden bequem von zu Hause abholen zu lassen. Unser Transporter kommt direkt zu dir und nimmt die Kleidung entgegen. Alternativ kannst du deine Spenden auch persönlich an unserer Geschäftsstelle abgeben. Gemeinsam machen wir es unkompliziert, Wärme und Freude zu schenken.',
    imgBigSrc: '../src/assets/service/warehouse.jpeg',
    imgBigAlt: 'Lagerhalle, in der Kartons mit Kleidern stehen',
    imgService1Src: '../src/assets/service/pickup.jpeg',
    imgService1Alt: 'Helfer räumt Kleiderspenden in einen Transporter.',
    imgService2Src: '../src/assets/service/office.jpeg',
    imgService2Alt: 'Eingang einer Lagerhalle mit Büro'
  }
  
  export const newsletter = {
    header: 'Abonniere unseren Newsletter',
    paragraph: 'Verpassen Sie keine Neuigkeiten mehr von Huminata! Unser Newsletter hält Sie stets auf dem Laufenden über unsere aktuellen Projekte, Veranstaltungen und Möglichkeiten, wie Sie sich engagieren können.'
  }

  export const projectsText = {
    header: 'Unsere Projekte',
    paragraph: 'Bei Huminata setzen wir uns mit Leidenschaft und Hingabe dafür ein, bedürftigen Menschen zu helfen. Unsere Spendenprojekte sind darauf ausgerichtet, konkrete Unterstützung zu leisten und Lebensqualität zu verbessern.'
  }

  export const projects = [
    {
      id: 1,
      name: 'Äthiopien',
      imgProjectSrc: '../src/assets/projects/project_ethiopia.jpeg',
      imgProjectAlt: 'Spenden in Äthiopien',
      imgFlagSrc: '../src/assets/flags/flag_ethiopia.png',
      imgFlagAlt: 'Flagge von Äthiopoien',
      projectText: 'Die Notlage der durch Konflikte vertriebenen Menschen ist eine große Herausforderung in Äthiopien. Unterstützen Sie diese Familien mit Ihrer Spende.',
    },
    {
      id: 2,
      name: 'Bolivien',
      imgProjectSrc: '../src/assets/projects/project_bolivia.png',
      imgProjectAlt: 'Spenden in Bolivien',
      imgFlagSrc: '../src/assets/flags/flag_bolivia.png',
      imgFlagAlt: 'Flagge von Bolivien',
      projectText: 'Bolivien zählt zu den am stärksten von Armut betroffenen Ländern in Südamerika, und viele Menschen sind auf Spenden angewiesen.',
    },
    {
      id: 3,
      name: 'Kenia',
      imgProjectSrc: '../src/assets/projects/project_kenia.jpeg',
      imgProjectAlt: 'Spenden in Kenia',
      imgFlagSrc: '../src/assets/flags/flag_kenia.png',
      imgFlagAlt: 'Flagge von Kenia',
      projectText: 'Kleiderspenden in Kenia unterstützen bedürftige Familien und helfen, die Auswirkungen von Armut und Arbeitslosigkeit zu lindern.',
    },
    {
      id: 4,
      name: 'Ukraine',
      imgProjectSrc: '../src/assets/projects/project_ukraine.png',
      imgProjectAlt: 'Spenden in Ukraine',
      imgFlagSrc: '../src/assets/flags/flag_ukraine.png',
      imgFlagAlt: 'Flagge von Ukraine',
      projectText: 'Seit 2022 herrscht Krieg in der Ukraine. Unterstützen Sie Familien in den vom Konflikt schwer getroffenen Gebieten und geben Sie den Menschen Hoffnung in dieser schwierigen Zeit.',
    },
    {
      id: 5,
      name: 'Berlin',
      imgProjectSrc: '../src/assets/projects/project_berlin.png',
      imgProjectAlt: 'Spenden in Berlin',
      imgFlagSrc: '../src/assets/flags/flag_germany.png',
      imgFlagAlt: 'Flagge von Deutschland',
      projectText: 'In Berlin-Tegel befindet sich das größte Flüchtlingslager Deutschlands, in dem über 5.000 Menschen auf Unterstützung angewiesen sind.',
    },
    {
      id: 6,
      name: 'Philippinen',
      imgProjectSrc: '../src/assets/projects/project_philippines.png',
      imgProjectAlt: 'Spenden in Philippinen',
      imgFlagSrc: '../src/assets/flags/flag_philippines.png',
      imgFlagAlt: 'Flagge von Philippinen',
      projectText: 'In Berlin-Tegel befindet sich das größte Flüchtlingslager Deutschlands, in dem über 5.000 Menschen auf Unterstützung angewiesen sind.',
    }
  ]

  export const blog = [
    {
      id: 1,
      name: 'Lieferung nach Odessa',
      date: '11 Feb. 2024',
      imgSrc: '../src/assets/blog/blog_ukraine.jpeg',
      imgAlt: 'Freiwillige Helfer arbeiten in einer Lagerhalle in der Ukraine.',
      blogHeader: 'Unterstützung in Odessa: Huminata im Einsatz',
      blogText: 'Derzeit sind wir direkt in Odessa vor Ort und leisten dringend benötigte Hilfe und Unterstützung für die örtliche Gemeinschaft.',
      blogUrl: '#blog'
    },
    {
      id: 2,
      name: 'Projekt in Philippinen',
      date: '23 Mai 2024',
      imgSrc: '../src/assets/blog/blog_philippines.jpeg',
      imgAlt: 'Zerstörtes Dorf auf den Philippinen',
      blogHeader: 'Hilfe auf den Philippinen: Zusammen stark in der Inselwelt',
      blogText: 'Auf den Philippinen arbeiten wir eng mit lokalen Organisationen zusammen, um bedürftigen Gemeinschaften umfassend zu helfen. Unsere Projekte erstrecken sich über mehrere Inseln und erreichen Menschen in abgelegenen Gebieten, die oft vergessen werden.',
      blogUrl: '#blog'
    },
    {
      id: 3,
      name: 'Projekt in Bolivien',
      date: '5 Nov. 2024',
      imgSrc: '../src/assets/blog/blog_bolivia.jpeg',
      imgAlt: 'Traditionelles Dorf in den Anden',
      blogHeader: 'Bolivien: Gemeinsam für eine bessere Zukunft',
      blogText: 'Besonders in den kalten Wintermonaten ist warme Kleidung von unschätzbarem Wert. In Bolivien haben wir bei Huminata eine bedeutende Partnerschaft mit lokalen Gemeinden in den Anden aufgebaut.',
      blogUrl: '#blog'
    }
  ]  

  export const personFields = [
    {
      id: 'firstName',
      label: 'Vorname',
      type: 'text',
      placeholder: '...',
      errorMessage: 'Bitte geben einen gültigen Vornamen an.'
    },
    {
      id: 'lastName',
      label: 'Nachname',
      type: 'text',
      placeholder: '...',
      errorMessage: 'Bitte geben einen gültigen Nachnamen an.'
    },
    {
      id: 'email',
      label: 'E-Mail',
      type: 'email',
      placeholder: 'email@test.de',
      errorMessage: 'Bitte gebe eine gültige E-Mail-Adrese an.'
    },
    {
      id: 'phone',
      label: 'Telefon',
      type: 'text',
      placeholder: '+49...',
      errorMessage: 'Bitte gebe eine gültige Telefonnummer an.'
    }
  ]
  
  export const addressFields = [
    {
      id: 'street',
      label: 'Straße',
      type: 'text',
      placeholder: '...',
      errorMessage: 'Bitte gebe eine gültige Straße an.'
    },
    {
      id: 'housenumber',
      label: 'Hausnummer',
      type: 'text',
      placeholder: '...',
      errorMessage: 'Bitte geben eine gültige Hausnummer an'
    },
    {
      id: 'zipcode',
      label: 'Postleitzahl',
      type: 'text',
      placeholder: '...',
      errorMessages: {
        required: 'Bitte gebe eine Postleitzahl an.',
        length: 'Bitte gültige Postleitzahl eingeben.',
        pattern: 'Abholung nicht möglich (Außerhalb des Abholgebiets).'
      }
    },
    {
      id: 'city',
      label: 'Stadt',
      type: 'text',
      placeholder: '...',
      errorMessage: 'Bitte gebe eine gültige Stadt an.'
    }
  ]

  export const addressOptions = [
    {
      id: 'adress-option-1',
      value: 'abholung',
      label: 'Abholung von zu Hause'
    },
    {
      id: 'adress-option-2',
      value: 'abgabe',
      label: 'Abgabe an der Geschäftsstelle'
    }
  ]