document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("/data")
    const data = await response.json()
      console.log(data);
    for (const item of data.data.search.edges) {
        document.querySelector("tbody").insertAdjacentHTML(
            "beforeend",
            `<tr>
               <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900">
                ${item.node.owner.login}
               </td>
               <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                 ${item.node.name}
               </td>
               <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                ${item.node.stargazers.totalCount}
              </td>
            </tr>
             `
          )
    }
})