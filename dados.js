const baseDeDados = [
  // CENTRO
    {
        "bairro": "Centro",
        "quadra": "61",
        "cep": "72900360",
        "lat": -15.94379,
        "lng": -48.266619,
        "obs": "Quadra do Restaurante Gulas"
    },
    {
        "bairro": "Centro",
        "quadra": "54",
        "cep": "72900362",
        "lat": -15.943733,
        "lng": -48.264815,
        "obs": "Quadra da agência da Caixa"
    },
    {
        "bairro": "Centro",
        "quadra": "68",
        "cep": "72900358",
        "lat": -15.943977,
        "lng": -48.268284,
        "obs": "Quadra frente ao campo gramado"
    },
    {
        "bairro": "Centro",
        "quadra": "47",
        "cep": "72900364",
        "lat": -15.943725,
        "lng": -48.264858,
        "obs": "Quadra em frente a Lua & Sol"
    },
    {
        "bairro": "Centro",
        "quadra": "Rodoviária/Feira coberta",
        "lat": -15.944483,
        "lng": -48.264747,
        "obs": ""
    },
    {
        "bairro": "Centro",
        "quadra": "Presídio/Campo gramado",
        "lat": -15.944751,
        "lng": -48.268436,
        "obs": ""
    },
    {
        "bairro": "Centro",
        "quadra": "40",
        "cep": "72900366",
        "lat": -15.943556,
        "lng": -48.261436,
        "obs": "Quadra do posto ponteio"
    },
    {
        "bairro": "Centro",
        "quadra": "30",
        "cep": "72900368",
        "lat": -15.943281,
        "lng": -48.259769,
        "obs": "Quadra da Santo Antônio Auto Peças"
    },
    {
        "bairro": "Centro",
        "quadra": "35",
        "cep": "72900294",
        "lat": -15.947272,
        "lng": -48.259500,
        "obs": "Quadra ao lado do José de Assis"
    },
    {
        "bairro": "Centro",
        "quadra": "20",
        "cep": "72900370",
        "lat": -15.94333,
        "lng": -48.259766,
        "obs": "Cervejato"
    },
    {
        "bairro": "Centro",
        "quadra": "12",
        "cep": "72900372",
        "lat": -15.942958,
        "lng": -48.256216,
        "obs": "Vapt Vupt"
    },
    {
        "bairro": "Centro",
        "quadra": "6",
        "cep": "72900374",
        "lat": -15.943118,
        "lng": -48.254754,
        "obs": "Garagem do SAMU"
    },
    {
        "bairro": "Centro",
        "quadra": "4",
        "cep": "72900378",
        "lat": -15.943408,
        "lng": -48.25344,
        "obs": "Atacadão Dia a Dia"
    },
    {
        "bairro": "Centro",
        "quadra": "3",
        "cep": "72900380",
        "lat": -15.942084,
        "lng": -48.253032,
        "obs": "Em frente ao Atacadão Dia a Dia"
    },
    {
        "bairro": "Centro",
        "quadra": "7",
        "cep": "72900382",
        "lat": -15.94232,
        "lng": -48.254374,
        "obs": "CFC Sabto Antônio"
    },
    {
        "bairro": "Centro",
        "quadra": "11",
        "cep": "72900396",
        "lat": -15.94211,
        "lng": -48.25517,
        "obs": "Praça da igrejinha"
    },
    {
        "bairro": "Centro",
        "quadra": "19",
        "cep": "72900398",
        "lat": -15.942064,
        "lng": -48.256401,
        "obs": "CFC Ágile/Japão da construção"
    },
    {
        "bairro": "Centro",
        "quadra": "58",
        "cep": "72900000",
        "lat": -15.949916,
        "lng": -48.262569,
        "obs": "Quadra da barbearia Ruben"
    },
    
    // BEATRIZ %
    {
        "bairro": "Beatriz 1",
        "quadra": "44",
        "cep": "72902-290",
        "lat": -15.943376,
        "lng": -48.298531,
        "obs": "Quadra do mercado do baiano"
    },
    
    // VILA PARQUE
    {
        "bairro": "Vila parque",
        "quadra": "A",
        "cep": "72902-600",
        "lat": -15.93042,
        "lng": -48.294749,
        "obs": "Quadra da academia boa forma"
    },
    
    // VILA PARAISO 1
    {
        "bairro": "Vila Paraíso 1",
        "quadra": "1",
        "cep": "72900730",
        "lat": -15.944915,
        "lng": -48.256032,
        "obs": "Quadra lateral ao Colégio Salomão"
    },
    {
        "bairro": "Vila Paraíso 1",
        "quadra": "2",
        "cep": "72900732",
        "lat": -15.945366,
        "lng": -48.256063,
        "obs": "Próximo a pista de Skate"
    },
    {
        "bairro": "Vila Paraíso 1",
        "quadra": "3",
        "cep": "72900734",
        "lat": -15.944949,
        "lng": -48.254881,
        "obs": ""
    },
    {
        "bairro": "Vila Paraíso 1",
        "quadra": "4",
        "cep": "72900736",
        "lat": -15.945454,
        "lng": -48.255014,
        "obs": ""
    },
    {
        "bairro": "Vila Paraíso 1",
        "quadra": "5",
        "cep": "72900738",
        "lat": -15.945246,
        "lng": -48.254048,
        "obs": ""
    },
    {
        "bairro": "Vila Paraíso 1",
        "quadra": "6",
        "cep": "72900740",
        "lat": -15.945235,
        "lng": -48.253497,
        "obs": ""
    },
    {
        "bairro": "Vila Paraíso 1",
        "quadra": "7",
        "cep": "72900742",
        "lat": -15.945278,
        "lng": -48.252944,
        "obs": "Quadra do grupo espírita"
    },
    
    // VILA PARAISO 2
    {
        "bairro": "Vila Paraíso 2",
        "quadra": "A",
        "cep": "72900670",
        "lat": -15.943996,
        "lng": -48.255936,
        "obs": "Colégio Salomão"
    },
    {
        "bairro": "Vila Paraíso 2",
        "quadra": "B",
        "cep": "72900672",
        "lat": -15.944425,
        "lng": -48.254901,
        "obs": "Atrás do Colégio Salomão"
    },
    {
        "bairro": "Vila Paraíso 2",
        "quadra": "D",
        "cep": "72900676",
        "lat": -15.944388,
        "lng": -48.254031,
        "obs": "Rua adjacente ao Colégio Salomão"
    },
    {
        "bairro": "Vila Paraíso 2",
        "quadra": "E",
        "cep": "72900678",
        "lat": -15.944423,
        "lng": -48.253475,
        "obs": "Rua adjacente ao Colégio Salomão"
    },
    {
        "bairro": "Vila Paraíso 2",
        "quadra": "F",
        "cep": "72900680",
        "lat": -15.944466,
        "lng": -48.252889,
        "obs": "Rua adjacente ao Colégio Salomão"
    },
    
    // CONCEIÇÃO GOMES RABELO
    {
        "bairro": "Conceição Gomes Rabelo",
        "quadra": "A",
        "cep": "72900021",
        "lat": -15.943777,
        "lng": -48.276483,
        "obs": "5ª rua abaixo do Fórum"
    },
    {
        "bairro": "Conceição Gomes Rabelo",
        "quadra": "B",
        "cep": "72900023",
        "lat": -15.943473,
        "lng": -48.276846,
        "obs": "5ª rua dos bombeiros"
    },
    {
        "bairro": "Conceição Gomes Rabelo",
        "quadra": "C1",
        "cep": "72900017",
        "lat": -15.943491,
        "lng": -48.27543,
        "obs": "5ª rua do fórum"
    },
    {
        "bairro": "Conceição Gomes Rabelo",
        "quadra": "C2",
        "cep": "72900019",
        "lat": -15.942999,
        "lng": -48.276161,
        "obs": "5ª rua dos bombeiros"
    },
    {
        "bairro": "Conceição Gomes Rabelo",
        "quadra": "D",
        "cep": "71900015",
        "lat": -15.942956,
        "lng": -48.275014,
        "obs": "4ª rua do fórum"
    },
    {
        "bairro": "Conceição Gomes Rabelo",
        "quadra": "E",
        "cep": "729000013",
        "lat": -15.942442,
        "lng": -48.27577,
        "obs": "4ª rua dos bombeiros"
    },
    {
        "bairro": "Conceição Gomes Rabelo",
        "quadra": "F",
        "cep": "72900009",
        "lat": -15.94255,
        "lng": -48.274709,
        "obs": "3ª rua do fórum"
    },
    {
        "bairro": "Conceição Gomes Rabelo",
        "quadra": "G",
        "cep": "72900011",
        "lat": -15.942038,
        "lng": -48.275437,
        "obs": "3ª rua dos bombeiros"
    },
    {
        "bairro": "Conceição Gomes Rabelo",
        "quadra": "H",
        "cep": "72900007",
        "lat": -15.94214,
        "lng": -48.274343,
        "obs": "2ª rua do fórum"
    },
    {
        "bairro": "Conceição Gomes Rabelo",
        "quadra": "I",
        "cep": "72900005",
        "lat": -15.94153,
        "lng": -48.275126,
        "obs": "2ª rua dos bombeiros"
    },
    {
        "bairro": "Conceição Gomes Rabelo",
        "quadra": "J",
        "cep": "72900001",
        "lat": -15.941611,
        "lng": -48.27408,
        "obs": "Quadra do posto de gasolina"
    },
    {
        "bairro": "Conceição Gomes Rabelo",
        "quadra": "K",
        "cep": "72900003",
        "lat": -15.941131,
        "lng": -48.274804,
        "obs": "Quadra ao lado do corpo de bombeiros"
    },
    
    // VILA ESPERANÇA
    {
        "bairro": "Vila Esperança",
        "quadra": "1",
        "cep": "72902112",
        "lat": -15.948121,
        "lng": -48.29208,
        "obs": "atrás da igreja assembléia de Deus"
    },
    {
        "bairro": "Vila Esperança",
        "quadra": "2",
        "cep": "72902110",
        "lat": -15.947763,
        "lng": -48.292541,
        "obs": "3ª quadra ao lado das escolas"
    },
    {
        "bairro": "Vila Esperança",
        "quadra": "3",
        "cep": "72902114",
        "lat": -15.947254,
        "lng": -48.292735,
        "obs": "quadra do supermercado"
    },
    {
        "bairro": "Vila Esperança",
        "quadra": "4",
        "cep": "72902116",
        "lat": -15.946745,
        "lng": -48.292843,
        "obs": "ao lado das escolas"
    },
    {
        "bairro": "Vila Esperança",
        "quadra": "5",
        "cep": "72902118",
        "lat": -15.946222,
        "lng": -48.293094,
        "obs": "quadra das escolas"
    },
    {
        "bairro": "Vila Esperança",
        "quadra": "6",
        "cep": "72902120",
        "lat": -15.945659,
        "lng": -48.293191,
        "obs": "quadra ao lado das escolas"
    },
    {
        "bairro": "Vila Esperança",
        "quadra": "7",
        "cep": "72902122",
        "lat": -15.94515,
        "lng": -48.293329,
        "obs": ""
    },
    {
        "bairro": "Vila Esperança",
        "quadra": "8",
        "cep": "72902124",
        "lat": -15.944626,
        "lng": -48.293598,
        "obs": ""
    },
    {
        "bairro": "Vila Esperança",
        "quadra": "9",
        "cep": "72902126",
        "lat": -15.944082,
        "lng": -48.293746,
        "obs": ""
    },
    {
        "bairro": "Vila Esperança",
        "quadra": "10",
        "cep": "72902128",
        "lat": -15.943525,
        "lng": -48.293898,
        "obs": ""
    },
    {
        "bairro": "Vila Esperança",
        "quadra": "11",
        "cep": "72902130",
        "lat": -15.943036,
        "lng": -48.293965,
        "obs": ""
    },

    // MONTES CLAROS 2
    {
        "bairro": "Montes Claros 2",
        "quadra": "17",
        "cep": "72906786",
        "lat": -15.957442,
        "lng": -48.258766,
        "obs": "Avenida das palmeiras"
    }
];