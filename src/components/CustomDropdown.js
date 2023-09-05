/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CustomDropdown({ buttonContent, menuItems }) {
    return (
        <Menu as="div" className="relative inline-block text-left float-right">
            <div>
                <Menu.Button className="flex flex-col justify-center items-center">
                    <div>{buttonContent}</div>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white dark:bg-[#141414] border dark:border-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {menuItems.map((item) => (
                            <Menu.Item key={item.label}>
                                {({ active }) => (
                                    <a
                                        to={item.href}
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 dark:text-white',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        <img
                                            className="inline-block h-4 w-4 mr-2"
                                            src={item.image}
                                            alt="Img"
                                        />
                                        {item.label}
                                    </a>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
