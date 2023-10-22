import tdl from "tdl";
import 'dotenv/config'

tdl.configure({tdjson: process.env.PATH_TDL_LIB})

const client = tdl.createClient({apiId: process.env.TELEGRAM_API_ID, apiHash: process.env.TELEGRAM_API_HASH})

client.on('error', console.error)
client.on('update', update => {
  console.log('Got update:', update)
})

async function main() {
  await client.login()
  const me = await client.invoke({ _: 'getMe' })
  console.log('My user:', me)
  client.close()
}

main()