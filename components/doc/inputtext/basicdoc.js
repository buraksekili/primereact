import { useState } from 'react';
import * as LaraLight from '../../../themes/lara-light.json';
import { useStyle } from '../../lib/hooks/useStyle';
import { InputText } from '../../lib/inputtext/InputText';
import { ObjectUtils } from '../../lib/utils/Utils';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    /** PrimeReactProvider */
    const cssVariables = ObjectUtils.convertToString(ObjectUtils.convertToCSSVariables(LaraLight?.default.global));
    const styles = `
:root {
    ${cssVariables}
}
    `;
    const status = useStyle(styles);
    /*********************/

    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputText value={value} onChange={(e) => setValue(e.target.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputText value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    InputText is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center gap-3">
                <InputText value={value} onChange={(e) => setValue(e.target.value)} />

                <InputText
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    themeProps={{
                        root: {
                            'border-style': 'dashed',
                            padding: {
                                left: '1rem',
                                top: '1.25rem',
                                bottom: '1.25rem'
                            },
                            color: 'red'
                        }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}

/*<style>

    .p-inputtext {
        color: var(--p-inputtext-text-color);

        color: var(--p-inputtext-color);
    }
</style>*/
