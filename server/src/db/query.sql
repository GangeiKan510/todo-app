-- Table: public.to_do_item

-- DROP TABLE IF EXISTS public.to_do_item;

CREATE TABLE IF NOT EXISTS public.to_do_item
(
    id integer NOT NULL DEFAULT nextval('to_do_item_id_seq'::regclass),
    title character varying(45) COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    user_id integer,
    CONSTRAINT to_do_item_pkey PRIMARY KEY (id),
    CONSTRAINT to_do_item_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.to_do_item
    OWNER to postgres;

-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    name character varying(100) COLLATE pg_catalog."default",
    username character varying(100) COLLATE pg_catalog."default",
    password text COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;