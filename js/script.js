"use strict"
window.addEventListener("DOMContentLoaded", () => {
    const tabsParent = document.querySelector(".tabheader__items"),
        tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent")

    function hideTabContent() {
        tabsContent.forEach(item => item.style.display = "none")
        tabs.forEach(tab => tab.classList.remove("tabheader__item_active"))
    }

    function showTabContent(index = 0) {
        tabsContent[index].style.display = "block"
        tabs[index].classList.add("tabheader__item_active")
    }

    hideTabContent()
    showTabContent(0)

    tabsParent.addEventListener("click", (e) => {
        const target = e.target
        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, index) => {
                if (target == item) {
                    hideTabContent()
                    showTabContent(index)
                }
            })
        }
    })

})