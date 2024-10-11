// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React, {FC, useEffect, useRef} from 'react'

import data from '@emoji-mart/data'

import {Picker} from 'emoji-mart'

import './emojiPicker.scss'

// import emojiSpirit from '../../static/emoji_spirit.png'

type Props = {
    onSelect: (emoji: string) => void
}

const EmojiPicker: FC<Props> = (props: Props): JSX.Element => {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
        >
            <ReactEmojiPicker
                data={data}
                onEmojiSelect={(emoji: any) => props.onSelect(emoji.native)}
            />
        </div>)
}

function ReactEmojiPicker(props: any) {
    const ref = useRef<any>(null)
    const instance = useRef<any>(null)

    if (instance?.current) {
        instance.current.update(props)
    }

    useEffect(() => {
        if (!ref?.current) {
            return
        }

        instance.current = new Picker({...props, ref})
    }, [ref])

    return React.createElement('div', {ref})
}

export default EmojiPicker
