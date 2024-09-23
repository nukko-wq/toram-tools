'use client'

import React, { type FormEvent } from 'react'
import { SearchIcon } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import type { Route } from 'next'

const KeyWord = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const params = new URLSearchParams(searchParams)

    const formData = new FormData(e.currentTarget)
    const q = formData.get('q')?.toString()

    if (q) {
      params.set('q', q)
    } else {
      params.delete('q')
    }
    replace(`${pathname}?${params.toString()}` as Route)
  }

  return (
    <form onSubmit={handleSubmit} className='gird gap-2'>
      <label htmlFor='q' className='font-bold'>
        モンスターを検索
      </label>
      <div className='flex h-10 w-full items-center rounded-md border pr-2 text-sm'>
        <input
          type='text'
          id='q'
          name='q'
          placeholder='モンスターの名前を入力'
          className='w-full px-3 py-2 focus:outline-none focus-visible:outline-1'
          defaultValue={searchParams.get('q')?.toString()}
        />
        <button type='button' aria-label='検索する' className='px-3'>
          <SearchIcon className="h-4 w-4 opacity-50" />
        </button>
      </div>
    </form>
  )
}

export default KeyWord