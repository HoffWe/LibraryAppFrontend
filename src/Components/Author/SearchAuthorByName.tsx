import { Box, Input, List, ListItem } from '@chakra-ui/react'
import { debounce } from 'lodash'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { minCharToSearch } from './constants'

export const SearchAuthorByName = () => {

    const [searchTerm, setSearchTerm] = useState("") //stan to jest takie pole prywatne gettery i settery razem 
    //const [suggestions, setSuggestions] = useState<Author[]>([])
    
    
    // const searchAuthors = () => {
    //     console.log(searchTerm)
    // } to opakowane niżej w useCallBack

    // const debouncedSearch = debounce(searchAuthors, 2000) // pierwsze to jest to co chcemy opóźnić , odrugie o ile tutaj jest taki problem, że wywołania sobie czekają i odpalają się wszystkie na raz po 2 s 

    //useCallback-> nie przytrzymuje wartości tylko obiekt funkcji funkcja nie zostanie przeładowana przy rerenderze, ale przy wywołaniu będzie przechodzić cała logika (ciało funkcji) 
    //useMemo przechowuje wartość - będzie wypluwać to samo dopóki coś w tablicy zależności się nie zmieni 
    
    const searchAuthors =  useCallback(async (term: string) => {
        //const result = await AuthorApi.getAuthorByName(term)
    
        //to do handle result 
    }, []) 
    
    const debouncedSearch = useMemo (
        () => debounce((term: string) => searchAuthors(term), 1300), 
        [searchAuthors]) // parametrem wejściowym funkcji jest słowo wyszukiwane czyli term 

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => { // tu zgarniamy to co się pojawiło w inpucie 
        // wywołanie podmiany wartości zmiennej 
        setSearchTerm(event.currentTarget.value)
    }

    useEffect (() => {// w momencie odpalania hook chcemy odpalać metodą szukania 
        // nie ma sensu żeby odpalał się po zamontowaniu i gdy jest pusta wartość (jeżeli nie jest pusty)
        if(searchTerm && searchTerm.length >minCharToSearch){
            debouncedSearch(searchTerm);
        }

    }, [searchTerm, debouncedSearch])// za każdym razem gdy się zmienia 

    return(

        <div>
            <div>SearchAuthorByName</div>
            <Input 
            type = 'text' 
            value={searchTerm} 
            placeholder='Basic usage' 
            onChange={onSearchChange}/> 
            {/* <Box>
                <List>
                    {suggestions.map((suggestions) => (
                        <ListItem>
                            {suggestions.name}
                        </ListItem>
                    ))}
                </List>
            </Box> */}
        </div>/// podpinamy onChange z metodą 
    )
}