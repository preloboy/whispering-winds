import { FlatList, ViewProps, ListRenderItemInfo } from "react-native";
import { TextType } from "./elements/TextType";
import { Card } from "./elements/Card";
import { PlaceProps, Places } from "@/constants/Places";

type PlacesProps = ViewProps & {
    item: PlaceProps,
}

const Place = ({ item: { name, city, country } }: PlacesProps) => {
    return (
        <Card portrait>
            <TextType type='subtitle' style={{ paddingHorizontal: 10 }}>{name}</TextType>
            <TextType type='defaultSemiBold' style={{ paddingHorizontal: 10 }}>{city}</TextType>
            <TextType type='default' style={{ paddingHorizontal: 10 }}>{country}</TextType>
        </Card>
    )
}

export const PlaceList = () => {
    return (
        <FlatList
            horizontal showsHorizontalScrollIndicator={false}
            data={Places}
            renderItem={({ item }) =>
                <Place item={item} />}
        />
    )
}
