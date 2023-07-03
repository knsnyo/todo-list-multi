import SwiftUI

struct NoAuth: View {
    var body: some View {
        VStack(spacing: rem(size: 2)) {
            SigninNavButton()
            SignupNavButton()
        }
    }
}

struct NoAuth_Previews: PreviewProvider {
    static var previews: some View {
        NoAuth()
    }
}
