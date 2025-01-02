  import {
    img_logo,
    img_hero,
    facebook_logo,
    instagram_logo,
    x_logo,
    youtube_logo,
    philosophy_1,
    philosophy_2,
    office,
    pickup,
    warehouse,
    project_berlin,
    project_bolivia,
    project_ethiopia,
    project_kenia,
    project_philippines,
    project_ukraine,
    flag_bolivia,
    flag_ethiopia,
    flag_germany,
    flag_kenia,
    flag_philippines,
    flag_ukraine,
    blog_bolivia,
    blog_philippines,
    blog_ukraine,
    accessories,
    babyclothes,
    coat,
    jeans,
    kidsclothes,
    pullover,
    shoes,
    sportswear,
    tshirt
  } from "../assets"
  
  export const header = {
    imgSrc: img_logo,
    imgAlt: 'Logo von Humanita (Herz mit Wollnadel)'
  }

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
        href: '/legals/contact'
      },
      {
        id: 2,
        label: 'Impressum',
        type: 'text',
        href: '/legals/legalnotice'
      },
      {
        id: 3,
        label: 'Datenschutz',
        type: 'text',
        href: '#'
      },
      {
        id: 4,
        label: 'Einstellungen',
        type: 'text',
        href: '#'
      },
      {
        id: 5,
        label: 'Datenverarbeitug',
        type: 'text',
        href: '#'
      },
      {
        id: 6,
        label: 'Barrierefreiheit',
        type: 'text',
        href: '#'
      },
  ]

  export const socials = [
      {
        id: 1,
        label: 'Facebook',
        imgSrc: facebook_logo,
        href: 'https://facebook.com'
      },
      {
        id: 2,
        label: 'Instagram',
        imgSrc: instagram_logo,
        href: 'https://instagram.com'
      },
      {
        id: 3,
        label: 'X',
        imgSrc: x_logo,
        href: 'https://x.com'
      },
      {
        id: 4,
        label: 'Youtube',
        imgSrc: youtube_logo,
        href: 'https://youtube.com',
      },
    ]

  export const hero = {
    header: 'Gemeinsam Wärme schenken: Deine Kleiderspende zählt!',
    text: 'In unseren Schränken schlummern ungenutzte Schätze. Mit deiner Kleiderspende an Huminata hilfst du Bedürftigen. Jede Jacke, jedes Paar Schuhe und jeder Pullover bringt Wärme, Freude und Hoffnung. Gemeinsam machen wir den Unterschied.',
    bgSrc: img_hero
  }

  export const philosophy = {
    header: 'Helfen ist unsere Herzensangelegenheit',
    paragraph1: 'Humanita ist mehr als nur eine Organisation, die Kleidung sammelt und verteilt. Unsere Philosophie basiert auf der Überzeugung, dass jede gespendete Kleidung ein Zeichen der Menschlichkeit und Solidarität ist. Wir glauben daran, dass wir gemeinsam eine Gemeinschaft schaffen können, in der niemand ohne die Grundbedürfnisse des Lebens auskommen muss.',
    paragraph2: 'Bei Humanita geht es nicht nur um die physische Unterstützung durch Kleidung, sondern auch um das Vermitteln von Hoffnung und Würde. Wir sind der festen Überzeugung, dass jeder Mensch das Recht auf ein würdevolles Leben hat, unabhängig von seiner finanziellen Lage. Kleidung ist dabei ein Mittel, um nicht nur Wärme und Schutz zu bieten, sondern auch ein Gefühl der Zugehörigkeit und Wertschätzung.',
    img1Scr: philosophy_1,
    img1Alt: 'Helfende stehen umarmend im Kreis, Perspektive von unten',
    img2Scr: philosophy_2,
    img2Alt: 'Helferin steht am Tisch und sortiert Kleidung'
  }

  export const service = {
    header: 'Bequeme Kleiderspende bei Huminata: Einfach und flexibel',
    paragraph: 'Bei Huminata machen wir das Spenden deiner Kleidungsstücke so einfach wie möglich. Wir bieten dir die Möglichkeit, deine Spenden bequem von zu Hause abholen zu lassen. Unser Transporter kommt direkt zu dir und nimmt die Kleidung entgegen. Alternativ kannst du deine Spenden auch persönlich an unserer Geschäftsstelle abgeben. Gemeinsam machen wir es unkompliziert, Wärme und Freude zu schenken.',
    imgBigSrc: warehouse,
    imgBigAlt: 'Lagerhalle, in der Kartons mit Kleidern stehen',
    imgService1Src: pickup,
    imgService1Alt: 'Helfer räumt Kleiderspenden in einen Transporter.',
    imgService2Src: office,
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
      imgProjectSrc: project_ethiopia,
      imgProjectAlt: 'Spenden in Äthiopien',
      imgFlagSrc: flag_ethiopia,
      imgFlagAlt: 'Flagge von Äthiopoien',
      projectText: 'Die Notlage der durch Konflikte vertriebenen Menschen ist eine große Herausforderung in Äthiopien. Unterstützen Sie diese Familien mit Ihrer Spende.',
    },
    {
      id: 2,
      name: 'Bolivien',
      imgProjectSrc: project_bolivia,
      imgProjectAlt: 'Spenden in Bolivien',
      imgFlagSrc: flag_bolivia,
      imgFlagAlt: 'Flagge von Bolivien',
      projectText: 'Bolivien zählt zu den am stärksten von Armut betroffenen Ländern in Südamerika, und viele Menschen sind auf Spenden angewiesen.',
    },
    {
      id: 3,
      name: 'Kenia',
      imgProjectSrc: project_kenia,
      imgProjectAlt: 'Spenden in Kenia',
      imgFlagSrc: flag_kenia,
      imgFlagAlt: 'Flagge von Kenia',
      projectText: 'Kleiderspenden in Kenia unterstützen bedürftige Familien und helfen, die Auswirkungen von Armut und Arbeitslosigkeit zu lindern.',
    },
    {
      id: 4,
      name: 'Ukraine',
      imgProjectSrc: project_ukraine,
      imgProjectAlt: 'Spenden in Ukraine',
      imgFlagSrc: flag_ukraine,
      imgFlagAlt: 'Flagge von Ukraine',
      projectText: 'Seit 2022 herrscht Krieg in der Ukraine. Unterstützen Sie Familien in den vom Konflikt schwer getroffenen Gebieten und geben Sie den Menschen Hoffnung in dieser schwierigen Zeit.',
    },
    {
      id: 5,
      name: 'Berlin',
      imgProjectSrc: project_berlin,
      imgProjectAlt: 'Spenden in Berlin',
      imgFlagSrc: flag_germany,
      imgFlagAlt: 'Flagge von Deutschland',
      projectText: 'In Berlin-Tegel befindet sich das größte Flüchtlingslager Deutschlands, in dem über 5.000 Menschen auf Unterstützung angewiesen sind.',
    },
    {
      id: 6,
      name: 'Philippinen',
      imgProjectSrc: project_philippines,
      imgProjectAlt: 'Spenden in Philippinen',
      imgFlagSrc: flag_philippines,
      imgFlagAlt: 'Flagge von Philippinen',
      projectText: 'Die Philippinen sind das Land mit den häufigsten Naturkatastrophen. Ihre Spende unterstützt betroffene Familien.',
    }
  ]

  export const blog = [
    {
      id: 1,
      name: 'Lieferung nach Odessa',
      date: '11 Feb. 2024',
      imgSrc: blog_ukraine,
      imgAlt: 'Freiwillige Helfer arbeiten in einer Lagerhalle in der Ukraine.',
      blogHeader: 'Unterstützung in Odessa: Huminata im Einsatz',
      blogText: 'Derzeit sind wir direkt in Odessa vor Ort und leisten dringend benötigte Hilfe und Unterstützung für die örtliche Gemeinschaft.',
      blogUrl: '#blog'
    },
    {
      id: 2,
      name: 'Projekt in Philippinen',
      date: '23 Mai 2024',
      imgSrc: blog_philippines,
      imgAlt: 'Zerstörtes Dorf auf den Philippinen',
      blogHeader: 'Hilfe auf den Philippinen: Zusammen stark in der Inselwelt',
      blogText: 'Auf den Philippinen arbeiten wir eng mit lokalen Organisationen zusammen, um bedürftigen Gemeinschaften umfassend zu helfen. Unsere Projekte erstrecken sich über mehrere Inseln und erreichen Menschen in abgelegenen Gebieten, die oft vergessen werden.',
      blogUrl: '#blog'
    },
    {
      id: 3,
      name: 'Projekt in Bolivien',
      date: '5 Nov. 2024',
      imgSrc: blog_bolivia,
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

  export const donation_items = [
    {
      id: 1,
      name: 'Pullover',
      imgSrc: pullover,
      imgAlt: 'Bild eines Pullovers',
    },
    {
      id: 2,
      name: 'T-Shirt',
      imgSrc: tshirt,
      imgAlt: 'Bild eines T-Shirts',
    },
    {
      id: 3,
      name: 'Mantel oder Jacke',
      imgSrc: coat,
      imgAlt: 'Bild eines Mantels',
    },
    {
      id: 4,
      name: 'Schuhe',
      imgSrc: shoes,
      imgAlt: 'Bild eines Schuhs',
    },
    {
      id: 5,
      name: 'Accessoires',
      imgSrc: accessories,
      imgAlt: 'Bild mit Handschuhe, Schal und Mütze',
    },
    {
      id: 6,
      name: 'Jeans',
      imgSrc: jeans,
      imgAlt: 'Bild von Jeans',
    },
    {
      id: 7,
      name: 'Sportkleidung',
      imgSrc: sportswear,
      imgAlt: 'Bild von Sportkleidung',
    },
    {
      id: 8,
      name: 'Kinderkleidung',
      imgSrc: kidsclothes,
      imgAlt: 'Bild von Kinderkleidung',
    },
    {
      id: 9,
      name: 'Babykleidung',
      imgSrc: babyclothes,
      imgAlt: 'Bild von Babykleidung',
    }
  ]

  export const contact = {
      header: 'Kontaktiere uns',
      paragraph: 'Wir freuen uns darauf, von Ihnen zu hören! Egal, ob Sie Fragen haben oder Unterstützung benötigen, unser Team ist hier, um Ihnen weiterzuhelfen.',
      emailHeader: 'Deine E-Mail',
      emailPlaceholder: 'Gib deine E-Mail-Adresse ein',
      subjectHeader: 'Betreff',
      subjectPlaceholder: 'Um welches Thema handelt es sich?',
      messageHeader: 'Deine Nachricht',
      messagePlaceholder: 'Hinterlasse ein Kommentar...'
    }

  export const legalnotice = {
    company: 'Humanita e.V.',
    street: 'Musterstraße 35',
    zipcode: '55118',
    city: 'Mainz',
    ceo: 'Max Mustermann',
    phone: '+49 (0) 123 456789',
    email: 'info@humanita.de',
    taxID: 'DE123456789',
    paragraphContent: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
    paragraphLink: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
    paragraphCopyright: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.'
}