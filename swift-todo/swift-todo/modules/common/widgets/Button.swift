import SwiftUI

struct CommonButton: View {
    var title: String
    
    var body: some View {
        Button(action: {
            print("tapped!")
        }) {
            HStack {
                Text(title)
                    .font(.title)
            }
            .padding(.all, rem(size: 2))
            .frame(width: vw(size: 70))
            .foregroundColor(.white)
            .background(Color.black)
            .cornerRadius(rem(size: 4))
        }
    }
}
