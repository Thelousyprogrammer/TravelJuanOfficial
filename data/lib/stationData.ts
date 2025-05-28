export type StationList = {
    name: string;
    latitude: number;
    longitude: number;
    line: 'LRT1' | 'LRT2' | 'MRT3';
    image: any;
    landmarks?: string[];
  };
  
  export type StationMap = {
    [key in 'LRT1' | 'LRT2' | 'MRT3']: StationList[];
  };
  
export const stations: StationMap = {
  LRT1: [
      {
        name: 'Fernando Poe Jr. Station',
        latitude: 14.657624728635215,
        longitude: 121.02111669819392,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/FPJ.jpg'),
        landmarks: [
          'EDSA Carousel Bus Stop - Roosevelt',
          'Muñoz Market',
          'STI College Muñoz-EDSA',
          'Waltermart North EDSA',
          'SM City North EDSA (Continue By Jeep)',
        ]
      },
      {
        name: 'Balintawak Station',
        latitude: 14.657555546010025,
        longitude: 121.00387772378848,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/Balintawak.jpg'),
        landmarks: [
          'Puregold Balintawak',
          'Balintawak Market',
          'Ayala Malls Cloverleaf (Continue By Shuttle)',
          'Balintawak Cloverleaf Park',
          'Juliana Wet and Dry Market',
        ]
      },
      {
        name: 'Monumento Station',
        latitude: 14.654384388194634,
        longitude: 120.98390641383745,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/YAMAHA_Monumento.jpg'),
        landmarks: [
          'Andres Bonifacio National Monument',
          'SM City Grand Central Mall NCR',
          'Manila Central University',
          'SM Hypermart Monumento',
          'Araneta Square Mall',
        ]
      },
      {
        name: '5th Avenue Station',
        latitude: 14.64442305332514,
        longitude: 120.98358938227538,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/5thAve.jpeg'),
        landmarks: [
          'La Loma Catholic Cemetery',
          'San Pancracio Parish Church',
          'Manila Chinese Cemetery North Gate',
        ]
      },
      {
        name: 'R. Papa Station',
        latitude: 14.636140335060112,
        longitude: 120.98238245130123,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/R_Papa.jpg'),
        landmarks: [
          'Chinese Cemetery R. Papa Gate',
          'San Pancracio Parish Church (Diocese of Caloocan)',
          'Matang Tubig Basketball Court',
        ]
      },
      {
        name: 'Abad Santos Station',
        latitude: 14.630574560521469,
        longitude: 120.98143374847275,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/Abad_Santos.jpg'),
        landmarks: [
          'Renzo Sports & Resto Bar',
          'San Pancracio Parish Church (Diocese of Caloocan)',
          'Chinese Cemetery South Gate',
        ]
      },
      {
        name: 'Blumentritt Station',
        latitude: 14.622653555113883,
        longitude: 120.98290601529271,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/Blumentritt.jpg'),
        landmarks: [
          'PNR Blumentritt Station (Defunct)',
          'San Roque de Manila Parish (Archdiocese of Manila)',
          'Puregold Blumentritt',
        ]
      },
      {
        name: 'Tayuman Station',
        latitude: 14.616691207866163,
        longitude: 120.98277486063108,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/Tayuman.jpg'),
        landmarks: [
          'SM City San Lazaro',
          'Department of Health (DOH) - San Lazaro Compound',
          'Archdiocesan Shrine of Espiritu Santo (Archdiocese of Manila)',
          'Jose R. Reyes Memorial Medical Center',
          'Tayuman Center Mall',
        ]
      },
      {
        name: 'Bambang Station',
        latitude: 14.611178455593393,
        longitude: 120.98248751400476,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/Bambang.jpg'),
        landmarks: [
          'Bambang Market',
          'Manila Business College',
          'Puregold Zurbaran',
          'Dayao-Capiral Ancestral House',
        ]
      },
      {
        name: 'Doroteo Jose Station',
        latitude: 14.605458290184078,
        longitude: 120.98203493738184,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/Doroteo_Jose.jpg'),
        landmarks: [
          'Transfer to: LRT 2 - Recto Station',
          'Manila City Jail',
          'Manila Grand Opera Hotel',
          'Philippine Rabbit Bus Lines Terminal',
          'Odeon Terminal Mall',
        ]
      },
      {
        name: 'Carriedo Station',
        latitude: 14.59899882768398,
        longitude: 120.98133292918916,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/Carriedo.jpg'),
        landmarks: [
          'FEATI University',
          'Minor Basilica and National Shrine of Jesus Nazareno - St. John the Baptist Parish',
          'Roman Santos Building',
          'Plaza Lacson',
          'Plaza Sta Cruz',
        ]
      },
      {
        name: 'Central Terminal Station',
        latitude: 14.592756080655041,
        longitude: 120.98163381306348,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/Central.jpg'),
        landmarks: [
          'Pasig Ferry Lawton',
          'Intramuros',
          'Arroceros Forest Park',
          'Manila Central Post Office',
          'Pasig River Esplanade',
        ]
      },
      {
        name: 'United Nations Station',
        latitude: 14.58255195921706,
        longitude: 120.9846333102637,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/United_Nations.jpg'),
        landmarks: [
          'Rizal Park',
          'National Museum of Natural History',
          'National Museum of Anthropology',
          'National Museum of Fine Arts',
          'National Library of the Philippines',
        ]
      },
      {
        name: 'Pedro Gil Station',
        latitude: 14.576542950667191,
        longitude: 120.98807067860757,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/Pedro_Gil.jpg'),
        landmarks: [
          'Philippine General Hospital',
          'University of the Philippines Manila',
          'Philippine Christian University',
          'Philippine Women’s University',
          'Manila Science High School',
        ]
      },
      {
        name: 'Quirino Avenue Station',
        latitude: 14.570295963657589,
        longitude: 120.9915545279347,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/Quirino.jpg'),
        landmarks: [
          'One Taft Residences',
          'Harvard Suites',
          'MNLA Fitness Gym',
          'Vellagio Tower',
          'Manila Zoo (Continue By Jeep)',
        ]
      },
      {
        name: 'Vito Cruz Station',
        latitude: 14.56333488655977,
        longitude: 120.99485304527856,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/Vito_Cruz.jpeg'),
        landmarks: [
          'De La Salle University Manila',
          'De La Salle-College of Saint Benilde Taft Campus',
          'Museum of Contemporary Art and Design Manila',
          'Rizal Memorial Stadium',
          'Rizal Memorial Coliseum',
        ]
      },
      {
        name: 'Gil Puyat Station',
        latitude: 14.554236064143996,
        longitude: 120.99715700441725,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/Gil_Puyat.jpeg'),
        landmarks: [
          'World Trade Center Metro Manila (Continue By Jeep)',
          'Arellano University - Jose Abad Santos Campus',
          'DLTB Co. Bus Buendia Terminal',
          'Jac Liner Buendia Terminal',
        ]
      },
      {
        name: 'Libertad Station',
        latitude: 14.547753790083096,
        longitude: 120.99861313459796,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/Libertad.jpg'),
        landmarks: [
          'Victory Mall Pasay',
          'Puregold Libertad',
          'Cuneta Astrodome (Continue By Jeep)',
        ]
      },
      {
        name: 'EDSA Station',
        latitude: 14.539016331975633,
        longitude: 121.0006230895206,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/EDSA.jpg'),
        landmarks: [
          'Transfer to: MRT 3 - Taft Ave. Station',
          'EDSA Carousel Bus Stop - Taft Avenue',
          'Metro Point Mall',
          'Rotonda Terminal Pasay',
          'SM Mall of Asia (MOA) (Continue By Jeep)',
        ]
      },
      {
        name: 'Baclaran Station',
        latitude: 14.534229175200153,
        longitude: 120.9983436635817,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/Baclaran.jpg'),
        landmarks: [
          'Baclaran Flea Market',
          'MyMall',
          'Two Shopping Center',
          'Baclaran Super Mall',
        ]
      },
      {
        name: 'Redemptorist-Aseana Station',
        latitude: 14.530233116153736,
        longitude: 120.99293470836399,
        line: 'LRT1',
        image: require("../../assets/images/LRT1/Redemptorist_Aseana.jpg"),
        landmarks: [
          'National Shrine of Our Mother of Perpetual Help',
          'Aseana City',
          'Department of Foreign Affairs - Office of Consular Affairs - ASEANA',
          'S&R Aseana-Baclaran',
          'City of Dreams Manila',
        ]
      },
      {
        name: 'MIA Road Station',
        latitude: 14.518517773232993,
        longitude: 120.9929881960446,
        line: 'LRT1',
        image: require("../../assets/images/LRT1/MIA.jpg"),
        landmarks: [
          'Ayala Malls Manila Bay',
          'Palacio de Memoria',
          'SMDC Breeze Residences by RedDoorz',
        ]
      },
      {
        name: 'PITX Station',
        latitude: 14.508451336584208,
        longitude: 120.99126121531823,
        line: 'LRT1',
        image: require("../../assets/images/LRT1/PITX.jpg"),
        landmarks: [
          'Parañaque Integrated Terminal Exchange (PITX)',
          'Imperial Plaza',
          'SSK Business Building',
        ]
      },
      {
        name: 'Ninoy Aquino Avenue Station',
        latitude: 14.498938173870071,
        longitude: 120.99436749894633,
        line: 'LRT1',
        image: require("../../assets/images/LRT1/Ninoy_Aquino.jpg"),
        landmarks: [
          'Ninoy Aquino International Airport (NAIA) Terminal 1 (Continue By Taxi)',
          'Ninoy Aquino International Airport (NAIA) Terminal 2 (Continue By Taxi)',
          'Puregold Parañaque',
          'S&R Parañaque',
          'Duty Free Philippines Fiesta Mall',
        ]
      },
      {
        name: 'Dr Santos Station',
        latitude: 14.485420339653212,
        longitude: 120.9894514224822,
        line: 'LRT1',
        image: require('../../assets/images/LRT1/Dr._Santos.jpg'),
        landmarks: [
          'SM City Sucat Building B',
          'The Philippine STAR Parañaque Office',
          'El Shaddai Shrine',
        ]
      }
    ],

  LRT2: [
      {
        name: 'Antipolo Station',
        latitude: 14.624810081034402,
        longitude: 121.12128775643286,
        line: 'LRT2',
        image: require('../../assets/images/LRT2/Antipolo.jpg'),
        landmarks: [
          'Antipolo Cathedral (Continue By Jeep/Bus/Tricycle)',
          'East Gate Business Center and Terminal',
          'SM City Masinag',
          'Kingsville Arcade',
        ]
      },
      {
        name: 'Marikina-Pasig Station',
        latitude: 14.620475865259252,
        longitude: 121.10057641530484,
        line: 'LRT2',
        image: require('../../assets/images/LRT2/Marikina_Pasig.jpg'),
        landmarks: [
          'Robinsons Place Metro East',
          'Sta. Lucia East Grand Mall',
          'Q Plaza',
        ]
      },
      {
        name: 'Santolan Station',
        latitude: 14.622119683938722,
        longitude: 121.0859490408181,
        line: 'LRT2',
        image: require('../../assets/images/LRT2/Santolan_LRT.jpg'),
        landmarks: [
          'SM City Marikina',
          'Ayala Malls Feliz (Continue By Jeep/Bus)',
          'BFCT East Metro Transport Terminal',
          'BFCT Bagsakan Market',
        ]
      },
      {
        name: 'Katipunan Station',
        latitude: 14.630783856461408,
        longitude: 121.0726974845176,
        line: 'LRT2',
        image: require('../../assets/images/LRT2/Katipunan.jpg'),
        landmarks: [
          'University of the Philippines - Diliman (Continue By Jeep)',
          'Ateneo de Manila University (Continue By Jeep)',
          'Miriam College (Continue By Jeep)',
          'UP Town Center (Continue By Jeep)',
          'Real Monasterio ​de Santa Clara de Manila',
        ]
      },
      {
        name: 'Anonas Station',
        latitude: 14.628029542568786,
        longitude: 121.0647551666052,
        line: 'LRT2',
        image: require('../../assets/images/LRT2/Anonas.jpg'),
        landmarks: [
          'Technological Institute of the Philippines (TIP) - Quezon City',
          'World Citi Colleges (WCC) - Quezon City',
          'World Citi Medical Center',
          'Hi-Top Supermart',
          'Coffeespot Ermin Garcia Ave.',
        ]
      },
      {
        name: 'Araneta Center-Cubao Station',
        latitude: 14.622780223866142,
        longitude: 121.05276653230955,
        line: 'LRT2',
        image: require('../../assets/images/LRT2/Cubao_LRT.jpg'),
        landmarks: [
          'Transfer to: MRT 3 - Araneta Center-Cubao Station',
          'Gateway Mall Complex 1 and 2',
          'Farmers Plaza',
          'Araneta Coliseum',
          'Ali Mall',
        ]
      },
      {
        name: 'Betty Go-Belmonte Station',
        latitude: 14.618563856298397,
        longitude: 121.0428212711678,
        line: 'LRT2',
        image: require('../../assets/images/LRT2/Betty_Go_Belmonte.jpg'),
        landmarks: [
          'Immaculate Conception Cathedral (Diocese of Cubao)',
          'Titus Brandsma Center',
          'The Three King Temple',
        ]
      },
      {
        name: 'Gilmore Station',
        latitude: 14.613524739671483,
        longitude: 121.03419012107291,
        line: 'LRT2',
        image: require('../../assets/images/LRT2/Gilmore.jpg'),
        landmarks: [
          'Gilmore IT Center',
          'Robinsons Magnolia',
          'St. Paul University - Quezon City',
          'Broadway Centrum',
        ]
      },
      {
        name: 'J. Ruiz Station',
        latitude: 14.610587874763453,
        longitude: 121.02616243370316,
        line: 'LRT2',
        image: require('../../assets/images/LRT2/J._Ruiz.jpg'),
        landmarks: [
          'Pinaglabanan Shrine',
          'St. John the Baptist Church',
          'San Juan City Hall',
        ]
      },
      {
        name: 'V. Mapa Station',
        latitude: 14.604067994445138,
        longitude: 121.017139278333,
        line: 'LRT2',
        image: require('../../assets/images/LRT2/V._Mapa.jpg'),
        landmarks: [
          'SM City Sta. Mesa',
          'SMDC Mezza Residences',
          'University of the East Ramon Magsaysay Memorial Medical Center (UERM)',
          'Central Colleges of the Philippines',
        ]
      },
      {
        name: 'Pureza Station',
        latitude: 14.601743899557878,
        longitude: 121.0050142548325,
        line: 'LRT2',
        image: require('../../assets/images/LRT2/Pureza.jpg'),
        landmarks: [
          'PNR Sta. Mesa Station (Defunct)',
          'Polytechnic University of the Philippines (PUP) - Sta. Mesa',
          'Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST)',
          'Sta. Mesa Fire Station No. 8',
          'Pureza PUP Ferry Terminal',
        ]
      },
      {
        name: 'Legarda Station',
        latitude: 14.600859853895736,
        longitude: 120.99257229443903,
        line: 'LRT2',
        image: require('../../assets/images/LRT2/Legarda.jpg'),
        landmarks: [
          'Technological Institute of the Philippines (TIP) - Manila',
          'National University (NU) - Manila',
          'San Beda University - Manila',
          'University of the East (UE) - Manila',
          'Pontifical and Royal University of Santo Tomas (UST) (Continue By Pedicab)',
        ]
      },
      {
        name: 'Recto Station',
        latitude: 14.603486153239535,
        longitude: 120.9835462198461,
        line: 'LRT2',
        image: require('../../assets/images/LRT2/Recto.jpg'),
        landmarks: [
          'Transfer to: LRT 1 - Doroteo Jose Station',
          'Far Eastern University (FEU) - Manila',
          'Isetann Cinerama Complex',
          'Manila City Jail',
        ]
      },
    ],

  MRT3: [
      {
        name: 'North Avenue Station',
        latitude: 14.652174762125254,
        longitude: 121.03233562696916,
        line: 'MRT3',
        image: require('../../assets/images/MRT3/North_Ave.jpg'),
        landmarks: [
          'EDSA Carousel Bus Stop - North Avenue',
          'Trinoma Mall',
          'SM North EDSA',
          'Ayala Malls Vertis North',
        ]
      },
      {
        name: 'Quezon Avenue Station',
        latitude: 14.642764581003192,
        longitude: 121.03851388131154,
        line: 'MRT3',
        image: require('../../assets/images/MRT3/Quezon_Ave.jpg'),
        landmarks: [
          'EDSA Carousel Bus Stop - Quezon Avenue',
          'Etron Centris',
          'Centris Station Mall',
          'ABS-CBN Broadcasting Center',
          'PBB House',
        ]
      },
      {
        name: 'GMA Kamuning Station',
        latitude: 14.635212481065853,
        longitude: 121.04334462048132,
        line: 'MRT3',
        image: require('../../assets/images/MRT3/GMA_Kamuning.jpg'),
        landmarks: [
          'EDSA Carousel Bus Stop - Katipunan',
          'GMA Network Center',
          'Hisbeans Cafe',
          'Manuel L. Quezon University',
          'Adonis Entertainment Bar',
        ]
      },
      {
        name: 'Araneta Center-Cubao Station',
        latitude: 14.619414173296468,
        longitude: 121.05109465178441,
        line: 'MRT3',
        image: require('../../assets/images/MRT3/Cubao_MRT.jpg'),
        landmarks: [
          'Transfer to: LRT 2 - Araneta Center-Cubao Station',
          'Gateway Mall Complex',
          'Farmers Plaza',
          'Araneta Coliseum',
          'Ali Mall',
        ]
      },
      {
        name: 'Santolan-Annapolis Station',
        latitude: 14.607813960244334,
        longitude: 121.05642163296262,
        line: 'MRT3',
        image: require('../../assets/images/MRT3/Santolan_MRT.jpg'),
        landmarks: [
          'EDSA Carousel Bus Stop - Santolan',
          'PNP (Camp Crame) Headquarters',
          'Camp Aguinaldo',
          'Armed Forces of the Philippines (AFP) Museum',
          'EDSA People Power Monument',
        ]
      },
      {
        name: 'Ortigas Station',
        latitude: 14.587847306387117,
        longitude: 121.05671946380616,
        line: 'MRT3',
        image: require('../../assets/images/MRT3/Ortigas.jpg'),
        landmarks: [
          'EDSA Carousel Bus Stop - Ortigas',
          'SM Megamall',
          'Robinsons Galleria Ortigas',
          'National Shrine of Mary, Queen of Peace - EDSA Shrine (Archdiocese of Manila)',
          'Department of Migrant Workers (DMW) - Ortigas',
        ]
      },
      {
        name: 'Shaw Boulevard Station',
        latitude: 14.5812002701805,
        longitude: 121.05359332029296,
        line: 'MRT3',
        image: require('../../assets/images/MRT3/Shaw_Blvd.jpg'),
        landmarks: [
          'Shangri-La Plaza',
          'Starmall EDSA-Shaw',
          'Greenfield District Pavilion',
          'Mandala Park (Continue By Jeep)',
        ]
      },
      {
        name: 'Boni Station',
        latitude: 14.573675392821302,
        longitude: 121.04812963780456,
        line: 'MRT3',
        image: require('../../assets/images/MRT3/Boni.jpg'),
        landmarks: [
          'Rizal Technological University (RTU) - Main Campus',
          'SMDC Light Mall',
          'Philippine Red Cross National Headquarters',
          'TV5 Media Center',
        ]
      },
      {
        name: 'Guadalupe Station',
        latitude: 14.567457964914107,
        longitude: 121.0457430695916,
        line: 'MRT3',
        image: require('../../assets/images/MRT3/Guadalupe.jpg'),
        landmarks: [
          'Guadalupe Ferry Terminal',
          'Guadalupe Commercial Complex',
          'Loyola Memorial Chapels and Crematorium',
          'Guadalupe Park',
        ]
      },
      {
        name: 'Buendia Station',
        latitude: 14.554591141873853,
        longitude: 121.03451361340046,
        line: 'MRT3',
        image: require('../../assets/images/MRT3/Buendia.jpg'),
        landmarks: [
          'EDSA Carousel Bus Stop - Buendia',
          'SM Cyber Two',
          'SM Cyber Makati One',
          'DTI International Office',
          'Urdaneta Park',
        ]
      },
      {
        name: 'Ayala Station',
        latitude: 14.549191654624853,
        longitude: 121.02796343090036,
        line: 'MRT3',
        image: require('../../assets/images/MRT3/Ayala.jpg'),
        landmarks: [
          'EDSA Carousel Bus Stop - Ayala',
          'One Ayala',
          'Greenbelt Mall',
          'SM Makati',
          'Ayala Museum',
        ]
      },
      {
        name: 'Magallanes Station',
        latitude: 14.541883351035906,
        longitude: 121.01932072682504,
        line: 'MRT3',
        image: require('../../assets/images/MRT3/Magallanes.jpg'),
        landmarks: [
          'PNR EDSA Station (Defunct)',
          'Southgate Mall',
          'San Lorenzo Place Mall',
          'Magallanes Interchange Park',
        ]
      },
      {
        name: 'Taft Avenue Station',
        latitude: 14.537666545528602,
        longitude: 121.00217385698024,
        line: 'MRT3',
        image: require('../../assets/images/MRT3/Taft_Ave.jpg'),
        landmarks: [
          'Transfer to: LRT 1 - EDSA Station',
          'Metro Point Mall',
          'EDSA Carousel Bus Stop - Taft Avenue',
          'SM Mall of Asia (MOA) (Continue By Jeep)',
        ]
      },
    ]
  };