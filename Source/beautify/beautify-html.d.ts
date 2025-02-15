/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export interface IBeautifyHTMLOptions {
	/**
	 * indent <head> and <body> sections
	 * default false
	 */
	indent_inner_html?: boolean;

	/**
	 * indentation size
	 * default 4
	 */
	indent_size?: number; // indentation size,

	/**
	 * character to indent with
	 * default space
	 */
	indent_char?: string; // character to indent with,

	/**
	 * add indenting whitespace to empty lines
	 * default false
	 */
	indent_empty_lines?: boolean; // add indenting whitespace to empty lines

	/**
	 * maximum amount of characters per line (0 = disable)
	 * default 250
	 */
	wrap_line_length?: number;

	/**
	 * put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
	 * "collapse" | "expand" | "end-expand" | "none"
	 * default "collapse"
	 */
	brace_style?: string;

	/**
	 * list of tags, that shouldn't be reformatted
	 * defaults to inline tags
	 */
	unformatted?: string[];

	/**
	 * list of tags, that its content shouldn't be reformatted
	 * defaults to pre tag
	 */
	content_unformatted?: string[];

	/**
	 * "keep"|"separate"|"normal"
	 * default normal
	 */
	indent_scripts?: "keep" | "separate" | "normal";

	/**
	 * whether existing line breaks before elements should be preserved. Only works before elements, not inside tags or for text.
	 * default true
	 */
	preserve_newlines?: boolean;

	/**
	 * maximum number of line breaks to be preserved in one chunk
	 * default unlimited
	 */
	max_preserve_newlines?: number;

	/**
	 * format and indent {{#foo}} and {{/foo}}
	 * default false
	 */
	indent_handlebars?: boolean;

	/**
	 * end with a newline
	 * default false
	 */
	end_with_newline?: boolean;

	/**
	 * List of tags that should have an extra newline before them.
	 * default [head,body,/html]
	 */
	extra_liners?: string[];

	/**
	 * wrap each attribute except first ('force')
	 * wrap each attribute except first and align ('force-aligned')
	 * wrap each attribute ('force-expand-multiline')
	 * multiple attributes are allowed per line, attributes that wrap will align vertically ('aligned-multiple')
	 * preserve wrapping of attributes ('preserve')
	 * preserve wrapping of attributes but align ('preserve-aligned')
	 * wrap only when line length is reached ('auto')
	 *
	 * default auto
	 */
	wrap_attributes?:
		| "auto"
		| "force"
		| "force-expand-multiline"
		| "force-aligned"
		| "aligned-multiple"
		| "preserve"
		| "preserve-aligned";

	/**
	 * Alignment size when using 'force-aligned' | 'aligned-multiple'
	 */
	wrap_attributes_indent_size?: number;

	/*
	 * end of line character to use
	 */
	eol?: string;

	/**
	 * List of templating languages (auto,none,angular,django,erb,handlebars,php,smarty)
	 * default ["auto"] = all in html
	 */
	templating?: (
		| "auto"
		| "none"
		| "angular"
		| "django"
		| "erb"
		| "handlebars"
		| "php"
		| "smarty"
	)[];

	/**
	 * Keep text content together between this string
	 * default ""
	 */
	unformatted_content_delimiter?: string;
}

export interface IBeautifyHTML {
	(value: string, options: IBeautifyHTMLOptions): string;
}

export declare var html_beautify: IBeautifyHTML;
