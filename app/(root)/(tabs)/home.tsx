import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Page() {
  const { user } = useUser()

  return (
    <SafeAreaView>
      <StatusBar style='dark' />
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
      <SignedOut>
        <Link href='/sign-in'>
          <Text>Sign In</Text>
        </Link>
        <Link href='/sign-up'>
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>

      <ScrollView>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          fugiat sapiente exercitationem esse? Laboriosam perspiciatis provident
          id quasi accusamus et animi sint blanditiis odit amet impedit omnis
          assumenda, accusantium dolore doloremque harum sequi corrupti
          incidunt? Ducimus odit aspernatur aliquid neque, perferendis labore
          enim voluptas, vel explicabo vero omnis veniam voluptate officia nulla
          aperiam molestiae vitae debitis? Natus similique ipsum perspiciatis,
          et pariatur sed sint excepturi unde eaque, cum omnis facere quia ad
          cupiditate accusamus praesentium placeat, dolore quasi neque quod.
          Aspernatur eligendi dignissimos voluptates, nisi natus ipsa
          voluptatibus perferendis eum eos dolorem quasi accusamus impedit neque
          dolores iste. Odio omnis quae sapiente dolorem suscipit eius autem,
          veritatis, id ipsa necessitatibus voluptatum? Magni expedita
          repudiandae repellendus amet unde maiores? Consectetur soluta, dolor
          porro consequatur incidunt iure minus in quos possimus eum cumque,
          repellat sint suscipit assumenda similique amet id magnam dignissimos
          delectus culpa laudantium quia nobis, reiciendis tempora! Doloribus,
          eaque possimus. Rerum nesciunt in quod aliquid aut itaque earum,
          maiores reprehenderit asperiores repellat corporis, voluptates odio
          sequi impedit atque voluptatibus optio velit molestias. Perspiciatis
          harum unde iusto molestias aperiam quae architecto repellendus. Ullam
          iusto eum nulla vitae consectetur corrupti quidem nihil ipsam dolore
          adipisci hic modi optio eaque quaerat facere non provident, dolores id
          unde explicabo laudantium laborum earum. Consequatur magnam, a
          voluptates molestias consectetur odio ex, quisquam porro temporibus
          est quia vel adipisci aliquam, facilis blanditiis id error enim
          ratione nesciunt impedit harum accusantium iste necessitatibus neque?
          Culpa vero, repudiandae necessitatibus facere eaque exercitationem est
          dignissimos iste assumenda, nesciunt beatae repellendus aspernatur
          praesentium illum nam! Omnis quae earum sit minima, vero vel? Aut
          dicta dolorum esse eveniet, ducimus, fuga a minus cumque, soluta
          reprehenderit vero excepturi? Eveniet quaerat architecto
          exercitationem illum delectus officiis eum a accusamus facere
          accusantium, impedit ea mollitia labore veniam unde voluptatibus
          aspernatur vel ullam fuga? Cupiditate adipisci animi dolorem tempora
          ullam aspernatur sint fugit, similique voluptas quaerat doloribus
          distinctio. Perspiciatis, temporibus nihil! Repudiandae, ullam libero?
          Laboriosam hic, asperiores in numquam possimus fuga ratione
          dignissimos omnis similique accusamus porro perferendis nobis delectus
          nihil reiciendis animi corporis repudiandae vero vel quis nemo sunt
          perspiciatis blanditiis. Ipsa aliquid eius officia ex voluptate illum
          eos, suscipit optio cupiditate unde, a dolorum. Aspernatur expedita
          vitae non harum, eaque consequuntur nostrum corrupti vel, fugiat quae
          asperiores debitis nesciunt. Deleniti, a id minima nesciunt dicta
          neque facilis magnam delectus voluptatibus veritatis eveniet deserunt,
          iste reprehenderit assumenda praesentium autem libero corrupti
          obcaecati quo, placeat voluptas? Excepturi ad sapiente quibusdam
          perferendis enim suscipit nostrum dicta recusandae distinctio? Velit
          sint commodi similique reprehenderit repellendus vero error rerum
          fugit obcaecati! Doloremque quae sequi delectus, enim optio sunt, ut
          beatae maiores voluptate dicta quos in at labore explicabo quasi iure
          soluta tempore. Corporis pariatur, ullam provident deserunt a fugiat
          labore! Perspiciatis suscipit labore aliquam, quam numquam explicabo
          dicta sed qui magni ut, reprehenderit voluptate! Quidem dignissimos
          nesciunt beatae ex dolorem atque natus, dolor laborum labore vero,
          error adipisci fugit nam nemo harum minima laudantium. Nostrum minus
          expedita rerum, reiciendis quam quidem recusandae soluta, laborum
          assumenda facilis itaque impedit!
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}
