const userName = process.env.RAYNET_USERNAME;
const apiKey = process.env.RAYNET_API_KEY;
const instanceName = process.env.RAYNET_INSTANCE_NAME;

const sendEmail = async (req, res) => {
  const data = req.body;
  const {
    solarOrInsulationPlan,
    conditions,
    houseOrFlat,
    ownerOfProperty,
    permanentResidence,
    moreThan2Properties,
    otherPeople,
    contactInformation: {
      fullname,
      phone,
      email,
      province
    },
    gdpr
  } = JSON.parse(data);

  const token = btoa(`${userName}:${apiKey}`);
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Instance-Name': instanceName,
      'Authorization': `Basic ${token}`,
    },
    body: JSON.stringify({
      "topic": "Poptávka přes dotazník",
      "priority": "DEFAULT",
      "firstName": contactInformation.fullname.split(' ')[0],
      "lastName": contactInformation.fullname.split(' ').slice(1).join(' '),
      "contactSource": 306,
      "contactInfo": {
        "email": contactInformation.email,
        "tel1": contactInformation.phone
      },
      "address": {
        "city": contactInformation.province
      },
      "notice": `
      Má zájem o zateplení strop nebo fotovoltaiku? ${solarOrInsulationPlan},
      Splňujete alespoň jednu z následujících podmínek? ${conditions},
      Bydlíte v rodinném domě či bytě? ${houseOrFlat},
      Jste vlastníkem rodinného domu? ${ownerOfProperty},
      Máte u této nemovitosti trvalé bydliště? ${permanentResidence}, 
      Jste v důchodu a jste majitelem nebo spolumajitelem 2 a více nemovitostí určené k obývání? ${moreThan2Properties}, 
      Pokud ve domě nebydlíte sami, splňují všechny ostatní osoby alespoň jednu z podmínek? ${otherPeople},
      `
    })
  };

  try {
    const response = await fetch('https://app.raynet.cz/api/v2/lead/', options);

    if (response.ok) {
    } else {
      return res.status(error.statusCode || 500).json({ error: response.statusText });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
};

export default sendEmail;