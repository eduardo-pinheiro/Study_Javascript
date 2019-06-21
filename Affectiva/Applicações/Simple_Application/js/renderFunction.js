let start = document.getElementById('start').style
let loading = document.getElementById('loading').style
let ongoing = document.getElementById('ongoing').style
let final = document.getElementById('final').style

function render(current) {

    resetRender()

    switch (current) {
        case 'start':
            start.display = "block"
            break
        case 'loading':
            loading.display = "block"
            break
        case 'ongoing':
            ongoing.display = "block"
            break
        case 'final':
            final.display = "block"
            break
    }
}

function resetRender() {
    start.display = ""
    loading.display = ""
    ongoing.display = ""
    final.display = ""
}