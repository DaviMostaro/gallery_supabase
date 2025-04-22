import { Container, NameArea } from './styles';

type Props = {
    name: string;
    url: string;
    onDelete: (name: string) => void;
}

export const PhotoItem = ({name, url, onDelete}: Props) => {
    return (
        <Container>
            <img src={url} alt={name} />
            <NameArea>
                <span>{name}</span>
                <button onClick={() => onDelete(name)} >🗑️</button>
            </NameArea>
        </Container>
    );
};