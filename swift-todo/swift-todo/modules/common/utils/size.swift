import SwiftUI

let width = UIScreen.main.bounds.size.width
let height = UIScreen.main.bounds.size.height
let fontSize = UIFont.systemFontSize

func vw(size: Int) -> CGFloat {
    return width / 100 * CGFloat(size)
}

func vh(size: Int) -> CGFloat {
    return height / 100 * CGFloat(size)
}

func rem(size: CGFloat) -> CGFloat {
    return size * 10
}
