const dotenv = require('dotenv')
dotenv.config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE)

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 })
    const products = response.records.map((product) => {
      const { id, fields } = product
      const {
        name,
        featured,

        desc,
        company,
        img,
        promotion,
        tecno,
        samsung,
        huawei,
        iphone,
        itel,
        nokia,
        accesory,
        charge,
        tablete,
        price,
        category,
      } = fields
      const { url } = img[0]
      return {
        id,
        name,
        featured,
category,
charge,
company,
        desc,

        img: url,

        price,
        promotion,
        tecno,
        samsung,
        huawei,
        iphone,
        itel,
        nokia,
        accesory,
        tablete,
        
      }
    })
    
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: 'there was an error',
    }
  }
}
