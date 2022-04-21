let spreadsheet = document.getElementById('spreadsheet')

const render = () => {
    let render_type = filter.value
    if (render_type==0) {
        render_bmi()
    } else {
        render_oneRepMaxs(render_type-1)
    }
}

let filter = document.getElementById('logbook_filter')
filter.addEventListener('change', render)

if (spreadsheet.innerText == '') {
    render()
}