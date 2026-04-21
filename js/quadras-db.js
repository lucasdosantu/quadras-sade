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
	{
		"bairro": "Vila Paraíso 2",
		"quadra": "8",
		"cep": "72900686",
		"lat": -15.945907,
		"lng": 256063,
		"obs": ""
	},
	{
		"bairro": "Vila Paraíso 2",
		"quadra": "10",
		"cep": "72900684",
		"lat": -15.945944,
		"lng": -48.255077,
		"obs": ""
	},
	{
		"bairro": "Vila Paraíso 2",
		"quadra": "12",
		"cep": "72900682",
		"lat": -15.946097,
		"lng": -48.253999,
		"obs": ""
	},
	{
		"bairro": "Vila Paraíso 2",
		"quadra": "9",
		"cep": "72900688",
		"lat": -15.946552,
		"lng": -48.256127,
		"obs": ""
	},
	{
		"bairro": "Vila Paraíso 2",
		"quadra": "11",
		"cep": "72900690",
		"lat": -15.946637,
		"lng": -48.254918,
		"obs": ""
	},
	{
		"bairro": "Vila Paraíso 2",
		"quadra": "1",
		"cep": "72900692",
		"lat": -15.946963,
		"lng": -48.25638,
		"obs": "Área Especial 1"
	},
	{
		"bairro": "Vila Paraíso 2",
		"quadra": "2",
		"cep": "72900694",
		"lat": -15.946981,
		"lng": -48.255956,
		"obs": "Área Especial 2"
	},
	{
		"bairro": "Vila Paraíso 2",
		"quadra": "3",
		"cep": "72900696",
		"lat": -15.947066,
		"lng": -48.255417,
		"obs": "Área Especial 3"
	},
	{
		"bairro": "Vila Paraíso 2",
		"quadra": "4",
		"cep": "72900698",
		"lat": -15.947101,
		"lng": -48.254992,
		"obs": "Área Especial 4"
	},
	{
		"bairro": "Vila Paraíso 2",
		"quadra": "13A",
		"cep": "72900700",
		"lat": -15.947508,
		"lng": -48.255744,
		"obs": ""
	},

	// VILA PARAÍSO 3
	{
		"bairro": "Vila Paraíso 3",
		"quadra": "B",
		"cep": "72900773",
		"lat": -15.948402,
		"lng": -48.255816,
		"obs": ""
	},
	{
		"bairro": "Vila Paraíso 3",
		"quadra": "C",
		"cep": "72900776",
		"lat": -15.948975,
		"lng": -48.255823,
		"obs": ""
	},
	{
		"bairro": "Vila Paraíso 3",
		"quadra": "D",
		"cep": "72900779",
		"lat": -15.948027,
		"lng": -48.255255,
		"obs": ""
	},

	// VILA SÃO LUIZ 1
	{
		"bairro": "Vila São Luiz 1",
		"quadra": "1",
		"cep": "72900866",
		"lat": -15.951303,
		"lng": -48.258396,
		"obs": ""
	},
	{
		"bairro": "Vila São Luiz 1",
		"quadra": "2",
		"cep": "72900864",
		"lat": -15.951623,
		"lng": -48.257788,
		"obs": ""
	},
	{
		"bairro": "Vila São Luiz 1",
		"quadra": "3",
		"cep": "72900862",
		"lat": -15.952013,
		"lng": -48.257277,
		"obs": ""
	},
	{
		"bairro": "Vila São Luiz 1",
		"quadra": "4",
		"cep": "72900860",
		"lat": -15.952353,
		"lng": -48.256623,
		"obs": ""
	},
	{
		"bairro": "Vila São Luiz 1",
		"quadra": "6",
		"cep": "72900876",
		"lat": -15.953977,
		"lng": -48.258137,
		"obs": ""
	},
	{
		"bairro": "Vila São Luiz 1",
		"quadra": "5",
		"cep": "72900872",
		"lat": -15.953291,
		"lng": -48.257965,
		"obs": ""
	},
	{
		"bairro": "Vila São Luiz 1",
		"quadra": "7",
		"cep": "72900874",
		"lat": -15.95314,
		"lng": -48.25965,
		"obs": ""
	},
	{
		"bairro": "Vila São Luiz 1",
		"quadra": "8",
		"cep": "72900870",
		"lat": -15.952554,
		"lng": -48.259519,
		"obs": ""
	},
	{
		"bairro": "Vila São Luiz 1",
		"quadra": "9",
		"cep": "782900868",
		"lat": -15.95177,
		"lng": -48.259375,
		"obs": ""
	},

	// VILA SÃO LUIZ 2
	{
		"bairro": "Vila São Luiz 2",
		"quadra": "1",
		"cep": "72900810",
		"lat": -15.949804,
		"lng": -48.25714,
		"obs": ""
	},
	{
		"bairro": "Vila São Luiz 2",
		"quadra": "2",
		"cep": "72900803",
		"lat": -15.950543,
		"lng": -48.256981,
		"obs": ""
	},
	{
		"bairro": "Vila São Luiz 2",
		"quadra": "3",
		"cep": "72900806",
		"lat": -15.950378,
		"lng": -48.256009,
		"obs": ""
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

	// MONTES CLAROS
	{
		"bairro": "Montes Claros 1",
		"quadra": "30",
		"cep": "72906668",
		"lat": -15.957389,
		"lng": -48.26637,
		"obs": "Asilo"
	},
	{
		"bairro": "Montes Claros 1",
		"quadra": "29",
		"cep": "72906670",
		"lat": -15.956575,
		"lng": -48.266312,
		"obs": "CMEI Ângela Abdon"
	},
	{
		"bairro": "Montes Claros 1",
		"quadra": "28",
		"cep": "72906674",
		"lat": -15.95599,
		"lng": -48.266374,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 1",
		"quadra": "27",
		"cep": "72906676",
		"lat": -15.955529,
		"lng": -48.266221,
		"obs": ""
	},
    {
        "bairro": "Montes Claros 1",
        "quadra": "26",
        "cep": "72906678",
        "lat": -15.955529,
        "lng": -48.266221,
        "obs": ""
    },
    {
        "bairro": "Montes Claros 1",
        "quadra": "25",
        "cep": "72906680",
        "lat": -15.95511,
        "lng": -48.266197,
        "obs": ""
    },
    {
        "bairro": "Montes Claros 1",
        "quadra": "24",
        "cep": "72906682",
        "lat": -15.954548,
        "lng": -48.266113,
        "obs": ""
    },
    {
        "bairro": "Montes Claros 1",
        "quadra": "23",
        "cep": "72906684",
        "lat": -15.953611,
        "lng": -48.266391,
        "obs": ""
    },
    {
        "bairro": "Montes Claros 1",
        "quadra": "22",
        "cep": "72906686",
        "lat": -15.953611,
        "lng": -48.265507,
        "obs": ""
    },
    {
        "bairro": "Montes Claros 1",
        "quadra": "17",
        "cep": "72906698",
        "lat": -15.955703,
        "lng": -48.265015,
        "obs": ""
    },
    {
        "bairro": "Montes Claros 1",
        "quadra": "16",
        "cep": "72906696",
        "lat": -15.955814,
        "lng": -48.264288,
        "obs": ""
    },
    {
        "bairro": "Montes Claros 1",
        "quadra": "15",
        "cep": "72906692",
        "lat": -15.954859,
        "lng": -48.264862,
        "obs": ""
    },
    {
        "bairro": "Montes Claros 1",
        "quadra": "14",
        "cep": "72906690",
        "lat": -15.954275,
        "lng": -48.264822,
        "obs": ""
    },
    {
        "bairro": "Montes Claros 1",
        "quadra": "13",
        "cep": "72906694",
        "lat": -15.954659,
        "lng": -48.264119,
        "obs": ""
    },
    {
        "bairro": "Montes Claros 1",
        "quadra": "12",
        "cep": "72906688",
        "lat": -15.953694,
        "lng": -48.264049,
        "obs": ""
    },
    {
        "bairro": "Montes Claros 1",
        "quadra": "18",
        "cep": "72906700",
        "lat": -15.956714,
        "lng": -48.264238,
        "obs": ""
    },
    {
        "bairro": "Montes Claros 1",
        "quadra": "4",
        "cep": "72906712",
        "lat": -15.956285,
        "lng": -48.2635,
        "obs": ""
    },
    {
        "bairro": "Montes Claros 1",
        "quadra": "5",
        "cep": "72906714",
        "lat": -15.95617,
        "lng": -48.262786,
        "obs": ""
    },
    {
        "bairro": "Montes Claros 1",
        "quadra": "2",
        "cep": "72906716",
        "lat": -15.955202,
        "lng": -48.263133,
        "obs": ""
    },

	// MONTES CLAROS 2
	{
		"bairro": "Montes Claros 2",
		"quadra": "1",
		"cep": "72906770",
		"lat": -15.955607,
		"lng": -48.260748,
		"obs": "Avenida das Palmeiras"
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "2",
		"cep": "72906716",
		"lat": -15.955148,
		"lng": -48.260599,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "3",
		"cep": "72906720",
		"lat": -15.954641,
		"lng": -48.260221,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "4",
		"cep": "72906776",
		"lat": -15.954832,
		"lng": -48.258433,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "5",
		"cep": "72906778",
		"lat": -15.955204,
		"lng": -48.258824,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "6",
		"cep": "72906780",
		"lat": -15.955593,
		"lng": -48.259162,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "7",
		"cep": "72906782",
		"lat": -15.955998,
		"lng": -48.259523,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "8",
		"cep": "72906784",
		"lat": -15.956356,
		"lng": -48.259834,
		"obs": "Avenida das Palmeiras"
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "9",
		"cep": "72906810",
		"lat": -15.956718,
		"lng": -48.26057,
		"obs": "Avenida das Palmeiras"
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "10",
		"cep": "72906812",
		"lat": -15.957293,
		"lng": -48.260841,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "11",
		"cep": "72906822",
		"lat": -15.957705,
		"lng": -48.261093,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "12",
		"cep": "72906824",
		"lat": -15.958209,
		"lng": -48.261374,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "13",
		"cep": "72906826",
		"lat": -15.959133,
		"lng": -48.260378,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "14",
		"cep": "72906820",
		"lat": -15.958715,
		"lng": -48.260095,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "15",
		"cep": "72906814",
		"lat": -15.958302,
		"lng": -48.25967,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "16",
		"cep": "72906808",
		"lat": -15.957847,
		"lng": -48.259263,
		"obs": "Avenida das Palmeiras"
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "17",
		"cep": "72906786",
		"lat": -15.957442,
		"lng": -48.258766,
		"obs": "Avenida das palmeiras"
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "18",
		"cep": "72906788",
		"lat": -15.95678,
		"lng": -48.258154,
		"obs": "CEPI"
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "19",
		"cep": "72906790",
		"lat": -15.956206,
		"lng": -48.25772,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "20",
		"cep": "72906792",
		"lat": -15.955787,
		"lng": -48.257282,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "21",
		"cep": "72906794",
		"lat": -15.956921,
		"lng": -48.256581,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "22",
		"cep": "72906796",
		"lat": -15.957606,
		"lng": -48.256927,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "23",
		"cep": "72906798",
		"lat": -15.95805,
		"lng": -48.257255,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "24",
		"cep": "72906800",
		"lat": -15.958468,
		"lng": -48.257568,
		"obs": "Avenida das Palmeiras"
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "25",
		"cep": "72906806",
		"lat": -15.958873,
		"lng": -48.258093,
		"obs": "Avenida das Palmeiras"
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "26",
		"cep": "72906816",
		"lat": -15.95925,
		"lng": -48.258466,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "27",
		"cep": "72906818",
		"lat": -15.959719,
		"lng": -48.258824,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "28",
		"cep": "72906828",
		"lat": -15.960078,
		"lng": -48.259236,
		"obs": ""
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "29",
		"cep": "72906804",
		"lat": -15.960606,
		"lng": -48.257377,
		"obs": "Avenida das Palmeiras"
	},
	{
		"bairro": "Montes Claros 2",
		"quadra": "30",
		"cep": "72906802",
		"lat": -15.95856,
		"lng": -48.255907,
		"obs": "Avenida das Palmeiras"
	},

	// PARQUE 11
	{
		"bairro": "Parque 11",
		"quadra": "41",
		"cep": "72906454",
		"lat": -15.953387,
		"lng": -48.271375,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "43",
		"cep": "72906452",
		"lat": -15.954023,
		"lng": -48.272248,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "42",
		"cep": "72906456",
		"lat": -15.954319,
		"lng": -48.270749,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "44",
		"cep": "72906458",
		"lat": -15.95466,
		"lng": -48.271706,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "45",
		"cep": "72906450",
		"lat": -15.954575,
		"lng": -48.272771,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "46",
		"cep": "72906448",
		"lat": -15.954792,
		"lng": -48.273356,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "47",
		"cep": "72906436",
		"lat": -15.954635,
		"lng": -48.274399,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "48",
		"cep": "72906438",
		"lat": -15.955255,
		"lng": -48.274394,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "50",
		"cep": "72906434",
		"lat": -15.955191,
		"lng": -48.275322,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "51",
		"cep": "72906432",
		"lat": -15.955392,
		"lng": -48.275938,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "49",
		"cep": "72906430",
		"lat": -15.953701,
		"lng": -48.274193,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "52",
		"cep": "72906464",
		"lat": -15.954897,
		"lng": -48.270025,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "53",
		"cep": "72906466",
		"lat": -15.955479,
		"lng": -48.270011,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "54",
		"cep": "72906462",
		"lat": -15.955488,
		"lng": -48.271113,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "55",
		"cep": "72906460",
		"lat": -15.955527,
		"lng": -48.271751,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "56",
		"cep": "72906446",
		"lat": -15.955604,
		"lng": -48.272805,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "57",
		"cep": "72906444",
		"lat": -15.956139,
		"lng": -48.272575,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "58",
		"cep": "72906442",
		"lat": -15.956098,
		"lng": -48.273636,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "59",
		"cep": "72906440",
		"lat": -15.956319,
		"lng": -48.274245,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "60",
		"cep": "72906428",
		"lat": -15.956275,
		"lng": -48.275383,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "61",
		"cep": "72906426",
		"lat": -15.956936,
		"lng": -48.275126,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "62",
		"cep": "72906424",
		"lat": -15.956944,
		"lng": -48.27633,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "63",
		"cep": "72906422",
		"lat": -15.957352,
		"lng": -48.276867,
		"obs": ""
	},
	{
		"bairro": "Parque 11",
		"quadra": "64",
		"cep": "72906420",
		"lat": -15.957557,
		"lng": -48.277812,
		"obs": ""
	}];