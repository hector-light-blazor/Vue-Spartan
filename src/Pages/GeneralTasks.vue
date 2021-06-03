<template>
    <div class="grid">
        <div class="backg">
            <div class="title">LV</div>
            <div class="body">
                <div class="card">
                    Hello
                </div>
                <div class="card">
                    Hello
                </div>
                <div class="card">
                    Hello
                </div>
                <div class="card">
                    Hello
                </div>
                <div class="card">
                    Hello
                </div>
                <div class="card">
                    Hello
                </div>
                <div class="card">
                    Hello
                </div>
                <div class="card">
                    Hello
                </div>
            </div>
        </div>
        <div class="backg">
            <div class="title">Database</div>
        </div>
        <div class="backg">
            <div class="title">GIS</div>
        </div>
        <div class="backg">
            <div class="title">Other</div>
        </div>
    </div>
</template>
<style scoped>
 .grid{
     display: flex;
     gap: 20px;
     padding: 14px;
     margin-left: 30px;
 }

 .backg{
    border-radius: 10px;
    background: #11265C;
    width: 280px;
    height: 500px;
 }
 .title {
     margin-left: 10px;
     margin-top: 12px;
     font-weight: bold;
     color: white;
 }
 .body {
     padding: 10px;
     height: 88%;
     overflow-y: scroll;
 }
 .card {
     background: white;
     height: 100px;
     margin-bottom: 14px;
 }
</style>
