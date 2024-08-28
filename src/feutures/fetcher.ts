const fetcher = async ([url, body ]: [string, object ])  => {
  try {
    const responce = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!responce.ok) {
      const error = new Error("Fetching data error")
      error.message = await responce.json()
    
      
      throw error
    }

    const data = await responce.json()

    return data
  } catch (error) {
    console.log(error);
  }
};

export default fetcher;

//TODO сделать типизацию