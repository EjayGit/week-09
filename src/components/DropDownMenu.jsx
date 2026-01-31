import { DropdownMenu } from "radix-ui";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";
import {SignedIn} from '@clerk/nextjs';
import { currentUser, auth } from "@clerk/nextjs/server";
import Link from 'next/link';
import './dropdownmenu.css'

export default async function DropDownMenu() {
	let username = '';
	if(auth() != null){
		const user = await currentUser();
		username = user?.username;
	}
    //console.log(username);

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button className="IconButton" aria-label="Customise options">
					<HamburgerMenuIcon />
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
					<DropdownMenu.Item className="DropdownMenuItem">
						<Link href={'/'}>Home</Link>
					</DropdownMenu.Item>
					<SignedIn>
                        <DropdownMenu.Item className="DropdownMenuItem">
                            <Link href={`/profile/${username}`}>Profile</Link>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className="DropdownMenuItem">
                            <Link href={`/profile/${username}/new-post`}>New-Post</Link>
                        </DropdownMenu.Item>
                    </SignedIn>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};