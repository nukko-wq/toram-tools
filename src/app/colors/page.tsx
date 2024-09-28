import { auth, signOut } from '@/auth'
import { redirect } from 'next/navigation'
import { tv } from 'tailwind-variants'

export default async function ColorsPage() {
  const card = tv({
    slots: {
      cardContainer: 'h-14 flex border-b pb-2',
      cardLeft: 'bg-blue-400 flex-grow',
      cardRight: 'bg-white w-1/6 flex justify-center items-center text-neutral-500'
    },
    variants: {
      position: {
        top: {
          cardContainer: ''
        }
      }
    }
  })

  const { cardLeft, cardRight, cardContainer } = card()

  const session = await auth()
  console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ~ ColorsPage ~ session:", session)
  const user = session?.user

  if (!session) {
    redirect('/profile')
  }
  return (
    <div className='w-full mx-auto px-4 pb-4 flex-grow pt-20'>
      <div className='grid grid-cols-2 gap-2'>
        <div id="top-card" className={cardContainer({ position: 'top' })}>
          <div className={cardLeft({ class: 'bg-[#ffffff]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer({ position: 'top' })}>
          <div className={cardLeft({ class: 'bg-[#c0c0c0]' })} />
          <div className={cardRight()}>2</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[#808080]' })} />
          <div className={cardRight()}>3</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[#404040]' })} />
          <div className={cardRight()}>4</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[#000000]' })} />
          <div className={cardRight()}>5</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[#fab3b2]' })} />
          <div className={cardRight()}>6</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[#fbcbb3]' })} />
          <div className={cardRight()}>7</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[#fcd8b4]' })} />
          <div className={cardRight()}>8</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[#fdebb4]' })} />
          <div className={cardRight()}>9</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[#fffeb5]' })} />
          <div className={cardRight()}>10</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
        <div className={cardContainer()}>
          <div className={cardLeft({ class: 'bg-[]' })} />
          <div className={cardRight()}>1</div>
        </div>
      </div>

    </div>

  )
}
