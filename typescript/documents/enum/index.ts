// 枚举可以定义一些带名字的常量 typescript支持数字和字符串的枚举
// 使用枚举可以清晰的表达意图和创建一组有区别的用例
// 数字用例
// Up初始化为1 其余成语从1开始自增
// 也可以不用初始化 默认从0开始
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}


// 通过枚举的属性访问枚举成员 枚举的名字访问枚举类型
enum Response2 {
    No = 0,
    Yes = 1,
}
function respond(recipient: string, message: Response2): void {
    console.log(Response2[1]) // Yes
    console.log(recipient, message)
}
respond('Princess Caroline', Response2.Yes); // 'Princess Caroline, 1'


// 字符串枚举
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}