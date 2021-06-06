document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("/data")
    const data = await response.json()
    console.log(data)
})