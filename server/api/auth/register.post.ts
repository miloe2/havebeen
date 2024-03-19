export default defineEventHandler(async (event) => {

    const body = await readBody(event);
    if(!body.email || !body.username  || !body.password){
        throw createError({
            statusCode: 400,
            statusMessage : 'Bad Request',
            message : 'Missing Request fields'
        })

    }
    // const user = await user.create(body)
    return 'hello'
})