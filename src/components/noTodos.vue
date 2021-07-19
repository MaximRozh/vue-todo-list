<template>
    <div class="no-todos">
        <h2 class="no-todos__title">Add something to your to-do list</h2>

        <div class="box-wrapper">
            <div class="box">
        </div>
</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.no-todos {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.no-todos__title {
    color: #34495E;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 30px;
    
}
.box-wrapper {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;
}
.box {
    width: 52%;
    height: 90%;
    background-image: linear-gradient(19deg, #34495E 0%, #41B883 100%);
    transition: all .5s ease;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}  
.box::before, .box::after {
    content: "";
    position: absolute;
    background: inherit;
    width: 100%;
    height: 100%;
    border-radius: 0;
    transition: all .5s ease;
    display: flex;
    align-content: center;
    justify-content: center;
} 
.box::before {
    transform: rotateZ(60deg);
    }
.box::after {
    transform: rotateZ(-60deg);
}  
.box:hover {
    border-radius: 50px;
}
.box:hover::after, .box:hover::before {
    border-radius: 50px;
} 
.box-wrapper:hover {
    transform: rotateZ(180deg);
}


@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>