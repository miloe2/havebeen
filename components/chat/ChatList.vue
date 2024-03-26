<template >
    <div class="w-full bg-stone-100 min-h-100 flex items-center justify-center">
        <div class="w-11/12 min-h-80 bg-white rounded-md">
            <div >
                hihi
            </div>
        </div>
    </div>
</template>
<script setup>
const result = {
    img : 'img',
    name : 'helly',
    message : 'hey',
    sent_at : new Date(),

}
// -- 메시지 테이블
// CREATE TABLE t_messages (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     sender_id INT NOT NULL,
//     receiver_id INT NOT NULL,
//     message TEXT NOT NULL,
//     sent_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//     read_flag INT NOT NULL DEFAULT 0,
//     FOREIGN KEY (sender_id) REFERENCES t_users(id),
//     FOREIGN KEY (receiver_id) REFERENCES t_users(id)
// );
// -- 채팅룸 
// CREATE TABLE t_chatrooms (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     room_name VARCHAR(255) NOT NULL,
//     created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//     -- 필요한 경우 추가적인 필드를 여기에 정의할 수 있습니다.
// );

</script>
<style >
    
</style>