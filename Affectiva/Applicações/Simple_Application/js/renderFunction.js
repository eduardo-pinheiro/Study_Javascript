let start = document.getElementById('start').style
let loading = document.getElementById('loading').style
let ongoing = document.getElementById('ongoing').style
let final = document.getElementById('final').style

function render(current) {

    resetRender()

    switch (current) {
        case 'start':
            start.display = "flex"
            break
        case 'loading':
            loading.display = "flex"
            break
        case 'ongoing':
            ongoing.display = "flex"
            break
        case 'final':
            final.display = "flex"
            break
    }
}

function resetRender() {
    start.display = ""
    loading.display = ""
    ongoing.display = ""
    final.display = ""
}