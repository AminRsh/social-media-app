import { LinkItUrl } from 'react-linkify-it';

interface LinkifyProps {
    children: React.ReactNode
}

export default function Linkify({ children }: LinkifyProps) {
    return (
        
    )
}

function LinkifyUrl({ children }: LinkifyProps) {
    return <LinkItUrl className="text-primary hover:underline">{children}</LinkItUrl>
}